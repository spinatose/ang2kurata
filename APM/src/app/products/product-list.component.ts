import { Component, OnInit } from "@angular/core";
import { Product } from "./product";

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  ngOnInit(): void {
    this.listFilter = "cart";
  }

  pageTitle: string = "ProcDuct List";
  imgWidth: number = 50;
  imgMargin: number = 2;
  showImage = false;

  private _listFilter: string = '';

  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    console.log(`Setting listFilter to [${value}]`)
    this._listFilter = value;
  }

  products: Product[] = [
    {
      "productId": 2,
      "productName": "Garden Cart",
      "productCode": "GDN-0023",
      "releaseDate": "March 18, 2021",
      "description": "15 gallon capacity rolling garden cart",
      "price": 32.99,
      "starRating": 4.2,
      "imageUrl": "assets/images/garden_cart.png"
    },
    {
      "productId": 5,
      "productName": "Hammer",
      "productCode": "TBX-0048",
      "releaseDate": "May 21, 2021",
      "description": "Curved claw steel hammer",
      "price": 8.9,
      "starRating": 4.8,
      "imageUrl": "assets/images/hammer.png"
    }
  ];

  filterProducts(): Product[] {
    return this.products.filter((p: Product) => p.productName.toLowerCase().includes(this.listFilter.toLowerCase()));
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }
}
