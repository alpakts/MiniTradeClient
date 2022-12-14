import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';
import { CustomersModule } from './customers/customers.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { NgxFileDropModule } from 'ngx-file-drop';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProductsModule,
    OrdersModule,
    CustomersModule,
    DashboardModule,
    NgxFileDropModule
  ],exports:[DashboardModule,ProductsModule,OrdersModule,CustomersModule]
})
export class MainComponentsModule { }
