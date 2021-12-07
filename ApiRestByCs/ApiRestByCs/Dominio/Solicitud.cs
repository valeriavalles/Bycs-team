using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ApiRestByCs.Dominio
{
    public class Solicitud
    {
        public Solicitud()
        {
            profesional = new Usuario();
            cliente = new Usuario();
        }
        public int id { get; set; }
        public string codSolicitud { get; set; }
        public string tipoServicio { get; set; }
        public DateTime? fechaSolicitud { get; set; }
        public decimal? monto { get; set; }
        public string detalleServicio { get; set; }
        public string distrito { get; set; }
        public string direccion { get; set; }
        public int? idProfesional { get; set; }
        public int? idCliente { get; set; }
        public int Idservicio { get; set; }

        //
        public Usuario profesional { get; set; }
        public Usuario cliente { get; set; }
        public string estado { get; set; }


    }
}
