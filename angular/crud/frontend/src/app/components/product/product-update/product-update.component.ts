import { Product } from "./../product.model";
import { Router, ActivatedRoute } from "@angular/router";
import { ProductService } from "./../product.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-product-update",
  templateUrl: "./product-update.component.html",
  styleUrls: ["./product-update.component.css"],
})
export class ProductUpdateComponent implements OnInit {
  product: Product | undefined;

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");

    // Verifica se o ID é válido e se não está vazio
    if (!id || id.trim() === "") {
      this.productService.showMessage("ID inválido!");
      this.router.navigate(["/products"]);
      return;
    }

    // Busca o produto pelo ID como string
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

  updateProduct(): void {
    if (!this.product || !this.product.id) {
      this.productService.showMessage("Produto inválido para atualização!");
      return;
    }

    // Atualiza o produto, passando o ID como string
    this.productService.update(this.product).subscribe({
      next: () => {
        this.productService.showMessage("Produto atualizado com sucesso!");
        this.router.navigate(["/products"]);
      },
      error: () => {
        this.productService.showMessage("Erro ao atualizar o produto!");
      }
    });
  }

  cancel(): void {
    this.router.navigate(["/products"]);
  }
}
