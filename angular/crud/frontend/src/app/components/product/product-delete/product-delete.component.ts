import { Router, ActivatedRoute } from "@angular/router";
import { ProductService } from "../product.service";
import { Product } from "../product.model";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-product-delete",
  templateUrl: "./product-delete.component.html",
  styleUrls: ["./product-delete.component.css"],
})
export class ProductDeleteComponent implements OnInit {
  product: Product | undefined;

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (!id || id.trim() === "") {
      this.productService.showMessage("ID inválido!");
      this.router.navigate(["/products"]);
      return;
    }

    this.productService.readById(id).subscribe({
      next: (product) => {
        this.product = product;
      },
      error: () => {
        this.productService.showMessage("Produto não encontrado!");
        this.router.navigate(["/products"]);
      }
    });
  }

  deleteProduct(): void {
    if (!this.product || !this.product.id) {
      this.productService.showMessage("Produto inválido para exclusão!");
      return;
    }

    this.productService.delete(this.product.id).subscribe({
      next: () => {
        this.productService.showMessage("Produto excluído com sucesso!");
        this.router.navigate(["/products"]);
      },
      error: () => {
        this.productService.showMessage("Erro ao excluir o produto!");
      }
    });
  }

  cancel(): void {
    this.router.navigate(["/products"]);
  }
}
