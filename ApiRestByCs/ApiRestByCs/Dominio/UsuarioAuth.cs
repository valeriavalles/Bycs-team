﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ApiRestByCs.Dominio
{
    public class UsuarioAuth
    {
        public int id { get; set; }
        public string nombres { get; set; }
        public string apellidos { get; set; }
        public string correo { get; set; }
        public string direccion { get; set; }
        public string tipousuario { get; set; }
        public string dni { get; set; }
        public string numeroceltel { get; set; }
        public string tiposervicio { get; set; }

        public string password { get; set; }
       
    }
}
