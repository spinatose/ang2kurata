import { Component, OnDestroy, OnInit } from "@angular/core";
import { Product } from "./product";
import { Subscription } from 'rxjs';
import { ProductService } from "./product.service";

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {
  ngOnInit(): void {
    this.sub = this.productService.getProducts().
      subscribe({
        next: (ps) => this.products = ps,
        error: (err) => this.errMessage = err
      });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  pageTitle: string = "ProcDuct List";
  imgWidth: number = 50;
  imgMargin: number = 2;
  showImage = false;
  errMessage = "";
  sub!: Subscription;

  private _listFilter: string = '';

  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    console.log(`Setting listFilter to [${value}]`)
    this._listFilter = value;
  }

  products: Product[] = [];

  constructor(private productService: ProductService) {

  }

  filterProducts(): Product[] {
    return this.products.filter((p: Product) => p.productName.toLowerCase().includes(this.listFilter.toLowerCase()));
  }

  onRatingClicked(message: string): void {
    this.pageTitle = `ProductPage: ${message}`;
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }
}
