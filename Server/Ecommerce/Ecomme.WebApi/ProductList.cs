using Ecomme.WebApi.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using Microsoft.Extensions.FileProviders;

namespace Ecomme.WebApi
{
    public class ProductList
    {
        public List<Product> productList = new()
        {
            new Product { Id = 1,Name="Product 1",Quantity=15},
            new Product { Id = 2,Name="Product 2",Quantity=20},
            new Product { Id = 3,Name="Product 3",Quantity=25},
            new Product { Id = 4,Name="Product 4",Quantity=30},
            new Product { Id = 5,Name="Product 5",Quantity=40}
        };

        public List<Product> GetProducts()
        {
            return productList;
        }

        public Product Get(int id)
        {
            try
            {
                return productList.Find(x => x.Id == id);
            }
            catch (Exception c)
            {

                throw new Exception("Try again");
            }
            
        }
    }
}
