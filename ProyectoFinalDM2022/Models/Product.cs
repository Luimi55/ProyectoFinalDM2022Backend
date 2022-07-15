using System;
using System.Collections.Generic;

namespace ProyectoFinalDM2022.Models
{
    public partial class Product
    {
        public int Id { get; set; }
        public string Name { get; set; } = null!;
        public decimal Price { get; set; }
        public int MarketId { get; set; }
        public string? Image { get; set; }
        public DateTime? CreatedAt { get; set; }

        public virtual Market Market { get; set; } = null!;
    }
}
