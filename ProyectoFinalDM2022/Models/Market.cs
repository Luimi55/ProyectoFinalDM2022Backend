using System;
using System.Collections.Generic;

namespace ProyectoFinalDM2022.Models
{
    public partial class Market
    {
        public Market()
        {
            Products = new HashSet<Product>();
        }

        public int Id { get; set; }
        public string Name { get; set; } = null!;
        public decimal Rating { get; set; }

        public virtual ICollection<Product> Products { get; set; }
    }
}
