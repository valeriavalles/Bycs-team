using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ApiRestByCs.Dominio
{
    public class Servicio
    {
        public int id { get; set; }
        public string codServicio { get; set; }
        public string tipoServicio { get; set; }
        public DateTime? fechaServicio { get; set; }
        public decimal? monto { get; set; }
        public string obserServicio { get; set; }
        public string detalleServicio { get; set; }
        public string departamento { get; set; }
        public string ciudad { get; set; }
        public string distrito { get; set; }
        public string direccion { get; set; }
        public int? idProfesional { get; set; }
        public int? idCliente { get; set; }
        public string imgUrl { get; set; }
    }
}
