<?php

namespace App\Http\Controllers\Api\User;

use App\Domains\MaterialDomain;
use App\Domains\ProductDomain;
use App\Domains\SymptomDomain;
use App\Domains\TasteDomain;
use App\Domains\FlavorDomain;

use App\Enums\IsPublic;
use App\Http\Controllers\Api\BaseController;
use App\Http\Resources\User\ProductCollection;
use App\Http\Resources\User\ProductResource;
use Illuminate\Http\Request;

class ProductController extends BaseController
{
    private $tasteDomain;
    private $materialDomain;
    private $productDomain;
    private $symptomDomain;

    private $flavorDomain;

    public function __construct(
        TasteDomain $tasteDomain,
        MaterialDomain $materialDomain,
        ProductDomain $productDomain,
        SymptomDomain $symptomDomain,
        FlavorDomain $flavorDomain
    ) {
        parent::__construct();
        $this->tasteDomain = $tasteDomain;
        $this->materialDomain = $materialDomain;
        $this->productDomain = $productDomain;
        $this->symptomDomain = $symptomDomain;
        $this->flavorDomain = $flavorDomain;
    }

    public function index(Request $request): ProductCollection
    {
        $search = $request->input();
        $search['is_public'] = IsPublic::IS_PUBLIC;
        // dd($search);
        $products = $this->productDomain->productPaginate($search);
        $products->loadMissing(['category', 'keywords', 'materials', 'prices', 'symptoms', 'tastes', 'flavors','uploadFiles']);
        return new ProductCollection($products);
    }

    public function show(Request $request, int $id): ProductResource
    {
        $productRow = $this->productDomain->getProductById($id);
        if (is_null($productRow) || $productRow->is_public !== IsPublic::IS_PUBLIC) {
            return $this->send404ErrorResponse();
        }
        $productRow->loadMissing(['category', 'keywords', 'materials', 'prices', 'symptoms', 'tastes', 'flavors', 'uploadFiles']);
        return new ProductResource($productRow);
    }

    public function categories(Request $request)
    {
        $data = [
            'tastes' => $this->tasteDomain->getAllTastes(),
            'flavors' => $this->flavorDomain->getAllFlavors(),
            'materials' => $this->materialDomain->getAllMaterials(),
            'symptoms' => $this->symptomDomain->getAllSymptoms(),
        ];
        return $this->sendResponse($data);
    }
}
