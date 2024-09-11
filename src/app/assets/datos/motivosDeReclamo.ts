interface SubtipoMotivoEspecifico {
    codigo: string;
    descripcion: string;
  }
  
  interface TipoMotivoEspecifico {
    codigo: string;
    subtipo: string | null;
    descripcion: string;
    subtiposMotivosEspecificos?: SubtipoMotivoEspecifico[];
  }
  
  interface MotivoEspecifico {
    codigo: string;
    descripcion: string;
    tiposMotivosEspecificos: TipoMotivoEspecifico[];
  }
  
  interface MotivoGeneral {
    codigo: string;
    descripcion: string;
    motivosEspecificos: MotivoEspecifico[];
  }
  
  interface Macromotivo {
    macromotivo: string;
    descripcion: string;
    motivosGenerales: MotivoGeneral[];
  }

export const motivoEspecifico = [
{
    macromotivo: "Macromotivo 01",
    descripcion: "BARRERAS EN EL ACCESO A TECNOLOGÍAS Y SERVICIOS DE SALUD; Y OTROS ELEMENTOS COMPLEMENTARIOS PARA LA ATENCIÓN DEL USUARIO",
    motivosGenerales: [
      {
        codigo: "0101",
        descripcion: "FALTA DE OPORTUNIDAD EN LA PRESTACIÓN DE TECNOLOGÍAS EN SALUD Y OTROS ELEMENTOS COMPLEMENTARIOS PARA LA ATENCIÓN DEL USUARIO",
        motivosEspecificos: [
          {
            codigo: "010101",
            descripcion: "FALTA DE OPORTUNIDAD EN LAS CITAS O CONSULTAS",
            tiposMotivosEspecificos: [
              {
                codigo: "01010101",
                subtipo: "01010101000",
                descripcion: "MEDICINA GENERAL"
              },
              {
                codigo: "01010102",
                subtipo: "01010102000",
                descripcion: "ODONTOLOGÍA GENERAL"
              },
              {
                codigo: "01010103",
                subtipo: null,
                descripcion: "ESPECIALIDADES MÉDICAS",
                subtiposMotivosEspecificos: [
                    { codigo: '01010103001', descripcion: 'ALERGOLOGÍA' },
                    { codigo: '01010103002', descripcion: 'ANESTESIOLOGÍA' },
                    { codigo: '01010103003', descripcion: 'ANESTESIOLOGÍA CARDIOTORÁXICA' },
                    { codigo: '01010103004', descripcion: 'ANESTESIOLOGÍA CARDIOVASCULAR' },
                    { codigo: '01010103005', descripcion: 'ARTROCOSPIA - ORTOPEDIA' },
                    { codigo: '01010103006', descripcion: 'CARDIOLOGÍA' },
                    { codigo: '01010103007', descripcion: 'CARDIOLOGÍA INTERVENCIONISTA Y HEMODINAMIA' },
                    { codigo: '01010103008', descripcion: 'CARDIOLOGÍA PEDIÁTRICA' },
                    { codigo: '01010103009', descripcion: 'CIRUGÍA CABEZA Y CUELLO - OTORRINOLARINGOLOGÍA' },
                    { codigo: '01010103010', descripcion: 'CIRUGÍA CARDIOVASCULAR' },
                    { codigo: '01010103011', descripcion: 'CIRUGÍA CRANEOFACIAL' },
                    { codigo: '01010103012', descripcion: 'CIRUGÍA DE CADERA' },
                    { codigo: '01010103013', descripcion: 'CIRUGÍA DE MAMA Y TEJIDOS BLANDOS - MASTOLOGÍA' },
                    { codigo: '01010103014', descripcion: 'CIRUGÍA DE MANO - ORTOPEDIA O CIRUGÍA PLASTICA' },
                    { codigo: '01010103015', descripcion: 'CIRUGÍA DE PIE Y TOBILLO - ORTOPEDIA' },
                    { codigo: '01010103016', descripcion: 'CIRUGÍA DE RODILLA - ORTOPEDIA' },
                    { codigo: '01010103017', descripcion: 'CIRUGÍA DE TÓRAX' },
                    { codigo: '01010103018', descripcion: 'CIRUGÍA DE TRASPLANTE' },
                    { codigo: '01010103019', descripcion: 'CIRUGÍA ENDOSCÓPICA GINECOLÓGICA' },
                    { codigo: '01010103020', descripcion: 'CIRUGÍA GASTROINTESTINAL' },
                    { codigo: '01010103021', descripcion: 'CIRUGÍA GASTROINTESTINAL Y ENDOSCOPIA DIGESTIVA' },
                    { codigo: '01010103022', descripcion: 'CIRUGÍA GENERAL' },
                    { codigo: '01010103023', descripcion: 'CIRUGÍA LAPAROSCÓPICA' },
                    { codigo: '01010103024', descripcion: 'CIRUGÍA MAXILOFACIAL' },
                    { codigo: '01010103025', descripcion: 'CIRUGÍA ONCOLÓGICA' },
                    { codigo: '01010103026', descripcion: 'CIRUGÍA PEDIÁTRICA' },
                    { codigo: '01010103027', descripcion: 'CIRUGÍA PLÁSTICA ONCOLÓGICA' },
                    { codigo: '01010103028', descripcion: 'CIRUGIA PLÁSTICA, ESTETICA Y RECONSTRUCTIVA' },
                    { codigo: '01010103029', descripcion: 'CIRUGÍA VASCULAR' },
                    { codigo: '01010103030', descripcion: 'CIUDADO INTENSIVO PEDIÁTRICO' },
                    { codigo: '01010103031', descripcion: 'COLOPROCTOLOGÍA' },
                    { codigo: '01010103032', descripcion: 'CUIDADO INTENSIVO' },
                    { codigo: '01010103033', descripcion: 'DERMATOLOGÍA' },
                    { codigo: '01010103034', descripcion: 'DERMATOLOGÍA ONCOLÓGICA' },
                    { codigo: '01010103035', descripcion: 'DOLOR Y CUIDADOS PALIATIVOS' },
                    { codigo: '01010103036', descripcion: 'ECOCARDIOGRAFÍA' },
                    { codigo: '01010103037', descripcion: 'ELECTROFISIOLOGÍA CARDÍACA' },
                    { codigo: '01010103038', descripcion: 'EMERGENCIOLOGÍA' },
                    { codigo: '01010103039', descripcion: 'ENDOCRINOLOGÍA' },
                    { codigo: '01010103040', descripcion: 'ENDOCRINOLOGÍA PEDIÁTRICA' },
                    { codigo: '01010103041', descripcion: 'FARMACOLOGÍA CLÍNICA' },
                    { codigo: '01010103042', descripcion: 'GASTROENTEROLOGÍA' },
                    { codigo: '01010103043', descripcion: 'GASTROENTEROLOGÍA PEDIÁTRICA' },
                    { codigo: '01010103044', descripcion: 'GENÉTICA MÉDICA' },
                    { codigo: '01010103045', descripcion: 'GERIATRÍA' },
                    { codigo: '01010103046', descripcion: 'GINECOLOGÍA ONCOLÓGICA' },
                    { codigo: '01010103047', descripcion: 'GINECOLOGÍA Y OBSTETRICIA' },
                    { codigo: '01010103048', descripcion: 'HEMATOLOGÍA' },
                    { codigo: '01010103049', descripcion: 'HEMATOLOGÍA PEDIÁTRICA' },
                    { codigo: '01010103050', descripcion: 'HEMATO-ONCOLOGÍA - ONCOHEMATOLOGÍA' },
                    { codigo: '01010103051', descripcion: 'HEMATO-ONCOLOGIA PEDIÁTRICA - ONCOHEMATOLOGÍA PEDIÁTRICA' },
                    { codigo: '01010103052', descripcion: 'HEMODINAMIA' },
                    { codigo: '01010103053', descripcion: 'HEPATOLOGÍA' },
                    { codigo: '01010103054', descripcion: 'INFECTOLOGÍA' },
                    { codigo: '01010103055', descripcion: 'MEDICINA AEROESPACIAL' },
                    { codigo: '01010103056', descripcion: 'MEDICINA ALETERNATIVA' },
                    { codigo: '01010103057', descripcion: 'MEDICINA DEL DEPORTE' },
                    { codigo: '01010103058', descripcion: 'MEDICINA DEL TRABAJO O SEGURIDAD Y SALUD EN EL TRABAJO' },
                    { codigo: '01010103059', descripcion: 'MEDICINA ESTÉTICA' },
                    { codigo: '01010103060', descripcion: 'MEDICINA FAMILIAR' },
                    { codigo: '01010103061', descripcion: 'MEDICINA FÍSICA Y REHABILITACIÓN - FISIATRÍA' },
                    { codigo: '01010103062', descripcion: 'MEDICINA FORENSE' },
                    { codigo: '01010103063', descripcion: 'MEDICINA INTERNA' },
                    { codigo: '01010103064', descripcion: 'MEDICINA NUCLEAR' },
                    { codigo: '01010103065', descripcion: 'MIEMBRO SUPERIOR - ORTOPEDIA' },
                    { codigo: '01010103066', descripcion: 'NEFROLOGÍA' },
                    { codigo: '01010103067', descripcion: 'NEFROLOGÍA PEDIÁTRICA' },
                    { codigo: '01010103068', descripcion: 'NEONATOLOGÍA' },
                    { codigo: '01010103069', descripcion: 'NEUMOLOGÍA' },
                    { codigo: '01010103070', descripcion: 'NEUMOLOGÍA PEDIÁTRICA' },
                    { codigo: '01010103071', descripcion: 'NEUROCIRUGÍA' },
                    { codigo: '01010103072', descripcion: 'NEUROLOGÍA' },
                    { codigo: '01010103073', descripcion: 'NEUROLOGÍA PEDIÁTRICA - NEUROPEDIATRIA' },
                    { codigo: '01010103074', descripcion: 'OCULOPLASTIA' },
                    { codigo: '01010103075', descripcion: 'OFTALMOLOGÍA' },
                    { codigo: '01010103076', descripcion: 'ONCOLOGÍA' },
                    { codigo: '01010103077', descripcion: 'ONCOLOGÍA PEDIÁTRICA' },
                    { codigo: '01010103078', descripcion: 'ORTOPEDIA Y TRAUMATOLOGÍA' },
                    { codigo: '01010103079', descripcion: 'ORTOPEDIA Y TRAUMATOLOGIA PEDIÁTRICA' },
                    { codigo: '01010103080', descripcion: 'OTORRINOLARINGOLOGÍA' },
                    { codigo: '01010103081', descripcion: 'PATOLOGÍA' },
                    { codigo: '01010103082', descripcion: 'PEDIATRÍA' },
                    { codigo: '01010103083', descripcion: 'PSIQUIATRÍA' },
                    { codigo: '01010103084', descripcion: 'PSIQUIATRÍA PEDIÁTRICA' },
                    { codigo: '01010103085', descripcion: 'PSQUIATRÍA DE ENLACE' },
                    { codigo: '01010103086', descripcion: 'RADIOLOGÍA E IMÁGENES DIAGNÓSTICAS' },
                    { codigo: '01010103087', descripcion: 'RADIOTERAPIA' },
                    { codigo: '01010103088', descripcion: 'REUMATOLOGÍA' },
                    { codigo: '01010103089', descripcion: 'REUMATOLOGÍA PEDIÁTRICA' },
                    { codigo: '01010103090', descripcion: 'SALUD FAMILIAR Y COMUNITARIA' },
                    { codigo: '01010103091', descripcion: 'SEXOLOGÍA CLÍNICA' },
                    { codigo: '01010103092', descripcion: 'TOXICOLOGÍA CLÍNICA' },
                    { codigo: '01010103093', descripcion: 'TRASPLANTES' },
                    { codigo: '01010103094', descripcion: 'UROLOGÍA' },
                ]
              },
              {
                codigo: "01010104",
                subtipo: null,
                descripcion: "ESPECIALIDADES ODONTOLÓGICAS",
                subtiposMotivosEspecificos: [
                    { codigo: '01010104001', descripcion: 'CIRUGÍA MAXILOFACIAL' },
                    { codigo: '01010104002', descripcion: 'CIRUGÍA MAXILOFACIAL - CIRUGÍA ORAL' },
                    { codigo: '01010104003', descripcion: 'ENDODONCIA' },
                    { codigo: '01010104004', descripcion: 'ESTOMATOLOGÍA' },
                    { codigo: '01010104005', descripcion: 'ESTOMATOLOGÍA PEDIÁTRICA' },
                    { codigo: '01010104006', descripcion: 'ESTOMATOLOGIA Y CIRUGÍA ORAL' },
                    { codigo: '01010104007', descripcion: 'IMPLANTOLOGÍA' },
                    { codigo: '01010104008', descripcion: 'ODONTOLOGÍA DE ADOLESCENTE' },
                    { codigo: '01010104009', descripcion: 'ODONTOLOGÍA FORENSE' },
                    { codigo: '01010104010', descripcion: 'ODONTOPEDIATRÍA' },
                    { codigo: '01010104011', descripcion: 'OPERATORIA Y ESTÉTICA DENTAL' },
                    { codigo: '01010104012', descripcion: 'ORTODONCIA' },
                    { codigo: '01010104013', descripcion: 'PATOLOGÍA ORAL' },
                    { codigo: '01010104014', descripcion: 'PERIODONCIA' },
                    { codigo: '01010104015', descripcion: 'PROSTODONCIA' },
                    { codigo: '01010104016', descripcion: 'RADIOLOGÍA ORAL Y MAXILOFACIAL' },
                    { codigo: '01010104017', descripcion: 'REHABILITACIÓN ORAL' },
                ]
               },
               {
                 codigo: "01010105",
                 subtipo: "01010105000",
                 descripcion: "PSICOLOGÍA",
                },
                {
                    codigo: "01010106",
                    subtipo: "01010106000",
                    descripcion: "NUTRICIÓN",
                },
                {
                    codigo: "01010107",
                    subtipo: "01010107000",
                    descripcion: "ENFERMERÍA",
                },
                {
                    codigo: "01010108",
                    subtipo: "01010108000",
                    descripcion: "FISIOTERAPIA",
                },
                {
                    codigo: "01010109",
                    subtipo: "01010109000",
                    descripcion: "FONOAUDIOLOGÍA",
                },
                {
                    codigo: "01010110",
                    subtipo: "01010110000",
                    descripcion: "VACUNACIÓN",
                },
                {
                    codigo: "01010111",
                    subtipo: "01010111000",
                    descripcion: "SEGURIDAD Y SALUD EN EL TRABAJO",
                },
                {
                    codigo: "01010112",
                    subtipo: "01010112000",
                    descripcion: "OPTOMETRÍA",
                },
                {
                    codigo: "01010113",
                    subtipo: "01010113000",
                    descripcion: "JUNTA MÉDICA",
                },
                {
                    codigo: "01010114",
                    subtipo: "01010114000",
                    descripcion: "BIOÉTICA",
                }
            ]
          },
          {
            codigo: "010102",
            descripcion: "FALTA DE OPORTUNIDAD PARA SERVICIOS DE COMPLEMENTACIÓN TERAPÉUTICA",
            tiposMotivosEspecificos: [
              {
                codigo: "01010201",
                subtipo: "01010201000",
                descripcion: "TERAPIA FÍSICA"
              },
              {
                codigo: "01010202",
                subtipo: "01010202000",
                descripcion: "TERAPIA RESPIRATORIA"
              },
              {
                codigo: "01010203",
                subtipo: "01010203000",
                descripcion: "TERAPIA OCUPACIONAL"
              },
              {
                codigo: "01010204",
                subtipo: "01010204000",
                descripcion: "TERAPIA INTEGRAL"
              },
              {
                codigo: "01010205",
                subtipo: "01010205000",
                descripcion: "PSICOTERAPIA"
              },
              {
                codigo: "01010206",
                subtipo: "01010206000",
                descripcion: "TERAPIA LENGUAJE"
              },
              {
                codigo: "01010207",
                subtipo: "01010207000",
                descripcion: "TRABAJO SOCIAL"
              },
              {
                codigo: "01010208",
                subtipo: "01010208000",
                descripcion: "TERAPIA ALTERNATIVA"
              },
              {
                codigo: "01010209",
                subtipo: "01010209000",
                descripcion: "OTRAS TERAPIAS"
              }
            ]
          },
          {
            codigo: "010103",
            descripcion: "FALTA DE OPORTUNIDAD EN LA ATENCIÓN EN OTROS SERVICIOS DE SALUD",
            tiposMotivosEspecificos: [
              {
                codigo: "01010301",
                subtipo: "01010301000",
                descripcion: "URGENCIAS"
              },
              {
                codigo: "01010302",
                subtipo: "01010302000",
                descripcion: "HOSPITALIZACIÓN"
              },
              {
                codigo: "01010303",
                subtipo: "01010303000",
                descripcion: "UNIDAD DE CIUDADO INTESIVO"
              },
              {
                codigo: "01010304",
                subtipo: "01010304000",
                descripcion: "UNIDAD DE CUIDADO INTERMEDIO"
              },
              {
                codigo: "01010305",
                subtipo: "01010305000",
                descripcion: "ATENCIÓN DOMICILIARIA"
              },
              {
                codigo: "01010306",
                subtipo: "01010306000",
                descripcion: "UNIDAD DE CUIDADO CRÓNICO"
              },
              {
                codigo: "01010307",
                subtipo: "01010307000",
                descripcion: "EUTANASIA - SUICIDIO ASISTIDO"
              },
              {
                codigo: "01010308",
                subtipo: null,
                descripcion: "PROCEDIMIENTOS NO QUIRÚRGICOS",
                subtiposMotivosEspecificos: [
                    { codigo: '01010308001', descripcion: 'IMAGENOLOGÍA' },
                    { codigo: '01010308002', descripcion: 'LABORATORIO CLÍNICO Y ANATOMOPATOLÓGICO' },
                    { codigo: '01010308003', descripcion: 'QUIMIOTERAPIA' },
                    { codigo: '01010308004', descripcion: 'RADIOTERAPIA' },
                    { codigo: '01010308005', descripcion: 'DIÁLISIS' },
                    { codigo: '01010308006', descripcion: 'OTROS PROCEDIMIENTOS NO QUIRÚRGICOS' },
                ]
              },
              {
                codigo: "01010309",
                subtipo: null,
                descripcion: "PROCEDIMIENTOS QUIRÚRGICOS",
                subtiposMotivosEspecificos: [
                    { codigo: '01010309001', descripcion: 'TRASPLANTE' },
                    { codigo: '01010309002', descripcion: 'INTERRUPCIÓN VOLUNTARIA DEL EMBARAZO - IVE' },
                    { codigo: '01010309003', descripcion: 'OTROS PROCEDIMIENTOS QUIRÚRGICOS' },
                ]
              }
            ]
          },
          {
            codigo: "010104",
            descripcion: "FALTA DE OPORTUNIDAD EN LA ENTREGA O ENTREGA INCOMPLETA DE TECNOLOGÍAS EN SALUD Y/O PRESTACIÓN DE OTROS SERVICIOS",
            tiposMotivosEspecificos: [
              {
                codigo: "01010401",
                subtipo: "01010401000",
                descripcion: "MEDICAMENTOS UPC"
              },
              {
                codigo: "01010402",
                subtipo: "01010402000",
                descripcion: "MEDICAMENTOS NO UPC"
              },
              {
                codigo: "01010403",
                subtipo: "01010403000",
                descripcion: "DISPOSITIVOS MÉDICOS UPC"
              },
              {
                codigo: "01010404",
                subtipo: "01010404000",
                descripcion: "DISPOSITIVOS MÉDICOS NO UPC"
              },
              {
                codigo: "01010405",
                subtipo: "01010405000",
                descripcion: "SUMINISTROS DE OXÍGENO"
              },
              {
                codigo: "01010406",
                subtipo: "01010406000",
                descripcion: "SOPORTE NUTRICIONAL"
              },
              {
                codigo: "01010407",
                subtipo: "01010407000",
                descripcion: "ELEMENTOS COMPLEMENTARIOS PARA LA ATENCIÓN DEL USUARIO (PAÑALES, PAÑITOS, ETC.)"
              },
              {
                codigo: "01010408",
                subtipo: "01010408000",
                descripcion: "TRANSPORTE, ALOJAMIENTO O ALIMENTACIÓN"
              },
            ]
          },
          {
            codigo: "010105",
            descripcion: "FALTA DE OPORTUNIDAD EN EL PROCESO DE REFERENCIA Y CONTRARREFERENCIA",
            tiposMotivosEspecificos: [
              {
                codigo: "01010500",
                subtipo: "01010500000",
                descripcion: "FALTA DE OPORTUNIDAD EN EL PROCESO DE REFERENCIA Y CONTRARREFERENCIA"
              }
            ]
          },
          {
            codigo: "010106",
            descripcion: "FALTA DE OPORTUNIDAD EN EL TRASLADO EN AMBULANCIA",
            tiposMotivosEspecificos: [
              {
                codigo: "01010601",
                subtipo: "01010601000",
                descripcion: "BÁSICA HOSPITALARIA"
              },
              {
                codigo: "01010602",
                subtipo: "01010602000",
                descripcion: "BÁSICA AMBULATORIA"
              },
              {
                codigo: "01010603",
                subtipo: "01010603000",
                descripcion: "MEDICALIZADA HOSPITALARIA"
              },
              {
                codigo: "01010604",
                subtipo: "01010604000",
                descripcion: "MEDICALIZADA AMBULATORIA"
              }
            ]
          },
          {
            codigo: "010107",
            descripcion: "FALTA DE OPORTUNIDAD EN LA RESPUESTA DE LA JUNTA MÉDICA O COMITÉ PARA TECNOLOGÍAS EN SALUD Y OTROS SERVICIOS",
            tiposMotivosEspecificos: [
              {
                codigo: "01010700",
                subtipo: "01010700000",
                descripcion: "FALTA DE OPORTUNIDAD EN LA RESPUESTA DE LA JUNTA MÉDICA O COMITÉ PARA TECNOLOGÍAS EN SALUD Y OTROS SERVICIOS"
              }
            ]
          },
        ]
      },
      {
        codigo: "0102",
        descripcion: "NEGACIÓN DE TECNOLOGÍAS EN SALUD Y OTROS ELEMENTOS COMPLEMENTARIOS PARA LA ATENCIÓN DEL USUARIO",
        motivosEspecificos: [
            {
                codigo: "010201",
                descripcion: "NEGACIÓN EN LA ASIGNACIÓN DE CITAS DE CITA O CONSULTA",
                tiposMotivosEspecificos: [
                    {
                    codigo: "01020101",
                    subtipo: "01020101000",
                    descripcion: "MEDICINA GENERAL"
                    },
                    {
                        codigo: "01020102",
                        subtipo: "01020102000",
                        descripcion: "ODONTOLOGÍA GENERAL"
                    },
                    {
                        codigo: "01020103",
                        subtipo: null,
                        descripcion: "ESPECIALIDADES MÉDICAS",
                        subtiposMotivosEspecificos: [
                            { codigo: '01020103001', descripcion: 'ALERGOLOGÍA' },
                            { codigo: '01020103002', descripcion: 'ANESTESIOLOGÍA' },
                            { codigo: '01020103003', descripcion: 'ANESTESIOLOGÍA CARDIOTORÁXICA' },
                            { codigo: '01020103004', descripcion: 'ANESTESIOLOGÍA CARDIOVASCULAR' },
                            { codigo: '01020103005', descripcion: 'ARTROCOSPIA - ORTOPEDIA' },
                            { codigo: '01020103006', descripcion: 'CARDIOLOGÍA' },
                            { codigo: '01020103007', descripcion: 'CARDIOLOGÍA INTERVENCIONISTA Y HEMODINAMIA' },
                            { codigo: '01020103008', descripcion: 'CARDIOLOGÍA PEDIÁTRICA' },
                            { codigo: '01020103009', descripcion: 'CIRUGÍA CABEZA Y CUELLO - OTORRINOLARINGOLOGÍA' },
                            { codigo: '01020103010', descripcion: 'CIRUGÍA CARDIOVASCULAR' },
                            { codigo: '01020103011', descripcion: 'CIRUGÍA CRANEOFACIAL' },
                            { codigo: '01020103012', descripcion: 'CIRUGÍA DE CADERA' },
                            { codigo: '01020103013', descripcion: 'CIRUGÍA DE MAMA Y TEJIDOS BLANDOS - MASTOLOGÍA' },
                            { codigo: '01020103014', descripcion: 'CIRUGÍA DE MANO - ORTOPEDIA O CIRUGÍA PLASTICA' },
                            { codigo: '01020103015', descripcion: 'CIRUGÍA DE PIE Y TOBILLO - ORTOPEDIA' },
                            { codigo: '01020103016', descripcion: 'CIRUGÍA DE RODILLA - ORTOPEDIA' },
                            { codigo: '01020103017', descripcion: 'CIRUGÍA DE TÓRAX' },
                            { codigo: '01020103018', descripcion: 'CIRUGÍA DE TRASPLANTE' },
                            { codigo: '01020103019', descripcion: 'CIRUGÍA ENDOSCÓPICA GINECOLÓGICA' },
                            { codigo: '01020103020', descripcion: 'CIRUGÍA GASTROINTESTINAL' },
                            { codigo: '01020103021', descripcion: 'CIRUGÍA GASTROINTESTINAL Y ENDOSCOPIA DIGESTIVA' },
                            { codigo: '01020103022', descripcion: 'CIRUGÍA GENERAL' },
                            { codigo: '01020103023', descripcion: 'CIRUGÍA LAPAROSCÓPICA' },
                            { codigo: '01020103024', descripcion: 'CIRUGÍA MAXILOFACIAL' },
                            { codigo: '01020103025', descripcion: 'CIRUGÍA ONCOLÓGICA' },
                            { codigo: '01020103026', descripcion: 'CIRUGÍA PEDIÁTRICA' },
                            { codigo: '01020103027', descripcion: 'CIRUGÍA PLÁSTICA ONCOLÓGICA' },
                            { codigo: '01020103028', descripcion: 'CIRUGIA PLÁSTICA, ESTETICA Y RECONSTRUCTIVA' },
                            { codigo: '01020103029', descripcion: 'CIRUGÍA VASCULAR' },
                            { codigo: '01020103030', descripcion: 'CIUDADO INTENSIVO PEDIÁTRICO' },
                            { codigo: '01020103031', descripcion: 'COLOPROCTOLOGÍA' },
                            { codigo: '01020103032', descripcion: 'CUIDADO INTENSIVO' },
                            { codigo: '01020103033', descripcion: 'DERMATOLOGÍA' },
                            { codigo: '01020103034', descripcion: 'DERMATOLOGÍA ONCOLÓGICA' },
                            { codigo: '01020103035', descripcion: 'DOLOR Y CUIDADOS PALIATIVOS' },
                            { codigo: '01020103036', descripcion: 'ECOCARDIOGRAFÍA' },
                            { codigo: '01020103037', descripcion: 'ELECTROFISIOLOGÍA CARDÍACA' },
                            { codigo: '01020103038', descripcion: 'EMERGENCIOLOGÍA' },
                            { codigo: '01020103039', descripcion: 'ENDOCRINOLOGÍA' },
                            { codigo: '01020103040', descripcion: 'ENDOCRINOLOGÍA PEDIÁTRICA' },
                            { codigo: '01020103041', descripcion: 'FARMACOLOGÍA CLÍNICA' },
                            { codigo: '01020103042', descripcion: 'GASTROENTEROLOGÍA' },
                            { codigo: '01020103043', descripcion: 'GASTROENTEROLOGÍA PEDIÁTRICA' },
                            { codigo: '01020103044', descripcion: 'GENÉTICA MÉDICA' },
                            { codigo: '01020103045', descripcion: 'GERIATRÍA' },
                            { codigo: '01020103046', descripcion: 'GINECOLOGÍA ONCOLÓGICA' },
                            { codigo: '01020103047', descripcion: 'GINECOLOGÍA Y OBSTETRICIA' },
                            { codigo: '01020103048', descripcion: 'HEMATOLOGÍA' },
                            { codigo: '01020103049', descripcion: 'HEMATOLOGÍA PEDIÁTRICA' },
                            { codigo: '01020103050', descripcion: 'HEMATO-ONCOLOGÍA - ONCOHEMATOLOGÍA' },
                            { codigo: '01020103051', descripcion: 'HEMATO-ONCOLOGIA PEDIÁTRICA - ONCOHEMATOLOGÍA PEDIÁTRICA' },
                            { codigo: '01020103052', descripcion: 'HEMODINAMIA' },
                            { codigo: '01020103053', descripcion: 'HEPATOLOGÍA' },
                            { codigo: '01020103054', descripcion: 'INFECTOLOGÍA' },
                            { codigo: '01020103055', descripcion: 'MEDICINA AEROESPACIAL' },
                            { codigo: '01020103056', descripcion: 'MEDICINA ALETERNATIVA' },
                            { codigo: '01020103057', descripcion: 'MEDICINA DEL DEPORTE' },
                            { codigo: '01020103058', descripcion: 'MEDICINA DEL TRABAJO O SEGURIDAD Y SALUD EN EL TRABAJO' },
                            { codigo: '01020103059', descripcion: 'MEDICINA ESTÉTICA' },
                            { codigo: '01020103060', descripcion: 'MEDICINA FAMILIAR' },
                            { codigo: '01020103061', descripcion: 'MEDICINA FÍSICA Y REHABILITACIÓN - FISIATRÍA' },
                            { codigo: '01020103062', descripcion: 'MEDICINA FORENSE' },
                            { codigo: '01020103063', descripcion: 'MEDICINA INTERNA' },
                            { codigo: '01020103064', descripcion: 'MEDICINA NUCLEAR' },
                            { codigo: '01020103065', descripcion: 'MIEMBRO SUPERIOR - ORTOPEDIA' },
                            { codigo: '01020103066', descripcion: 'NEFROLOGÍA' },
                            { codigo: '01020103067', descripcion: 'NEFROLOGÍA PEDIÁTRICA' },
                            { codigo: '01020103068', descripcion: 'NEONATOLOGÍA' },
                            { codigo: '01020103069', descripcion: 'NEUMOLOGÍA' },
                            { codigo: '01020103070', descripcion: 'NEUMOLOGÍA PEDIÁTRICA' },
                            { codigo: '01020103071', descripcion: 'NEUROCIRUGÍA' },
                            { codigo: '01020103072', descripcion: 'NEUROLOGÍA' },
                            { codigo: '01020103073', descripcion: 'NEUROLOGÍA PEDIÁTRICA - NEUROPEDIATRIA' },
                            { codigo: '01020103074', descripcion: 'OCULOPLASTIA' },
                            { codigo: '01020103075', descripcion: 'OFTALMOLOGÍA' },
                            { codigo: '01020103076', descripcion: 'ONCOLOGÍA' },
                            { codigo: '01020103077', descripcion: 'ONCOLOGÍA PEDIÁTRICA' },
                            { codigo: '01020103078', descripcion: 'ORTOPEDIA Y TRAUMATOLOGÍA' },
                            { codigo: '01020103079', descripcion: 'ORTOPEDIA Y TRAUMATOLOGIA PEDIÁTRICA' },
                            { codigo: '01020103080', descripcion: 'OTORRINOLARINGOLOGÍA' },
                            { codigo: '01020103081', descripcion: 'PATOLOGÍA' },
                            { codigo: '01020103082', descripcion: 'PEDIATRÍA' },
                            { codigo: '01020103083', descripcion: 'PSIQUIATRÍA' },
                            { codigo: '01020103084', descripcion: 'PSIQUIATRÍA PEDIÁTRICA' },
                            { codigo: '01020103085', descripcion: 'PSQUIATRÍA DE ENLACE' },
                            { codigo: '01020103086', descripcion: 'RADIOLOGÍA E IMÁGENES DIAGNÓSTICAS' },
                            { codigo: '01020103087', descripcion: 'RADIOTERAPIA' },
                            { codigo: '01020103088', descripcion: 'REUMATOLOGÍA' },
                            { codigo: '01020103089', descripcion: 'REUMATOLOGÍA PEDIÁTRICA' },
                            { codigo: '01020103090', descripcion: 'SALUD FAMILIAR Y COMUNITARIA' },
                            { codigo: '01020103091', descripcion: 'SEXOLOGÍA CLÍNICA' },
                            { codigo: '01020103092', descripcion: 'TOXICOLOGÍA CLÍNICA' },
                            { codigo: '01020103093', descripcion: 'TRASPLANTES' },
                            { codigo: '01020103094', descripcion: 'UROLOGÍA' },
                        ]
                    },
                    {
                        codigo: "01020104",
                        subtipo: null,
                        descripcion: "ESPECIALIDADES ODONTOLÓGICAS",
                        subtiposMotivosEspecificos: [
                            { codigo: '01020104001', descripcion: 'CIRUGÍA MAXILOFACIAL' },
                            { codigo: '01020104002', descripcion: 'CIRUGÍA MAXILOFACIAL - CIRUGÍA ORAL' },
                            { codigo: '01020104003', descripcion: 'ENDODONCIA' },
                            { codigo: '01020104004', descripcion: 'ESTOMATOLOGÍA' },
                            { codigo: '01020104005', descripcion: 'ESTOMATOLOGÍA PEDIÁTRICA' },
                            { codigo: '01020104006', descripcion: 'ESTOMATOLOGIA Y CIRUGÍA ORAL' },
                            { codigo: '01020104007', descripcion: 'IMPLANTOLOGÍA' },
                            { codigo: '01020104008', descripcion: 'ODONTOLOGÍA DE ADOLESCENTE' },
                            { codigo: '01020104009', descripcion: 'ODONTOLOGÍA FORENSE' },
                            { codigo: '01020104010', descripcion: 'ODONTOPEDIATRÍA' },
                            { codigo: '01020104011', descripcion: 'OPERATORIA Y ESTÉTICA DENTAL' },
                            { codigo: '01020104012', descripcion: 'ORTODONCIA' },
                            { codigo: '01020104013', descripcion: 'PATOLOGÍA ORAL' },
                            { codigo: '01020104014', descripcion: 'PERIODONCIA' },
                            { codigo: '01020104015', descripcion: 'PROSTODONCIA' },
                            { codigo: '01020104016', descripcion: 'RADIOLOGÍA ORAL Y MAXILOFACIAL' },
                            { codigo: '01020104017', descripcion: 'REHABILITACIÓN ORAL' },
                        ]
                    },
                    {
                        codigo: "01020105",
                        subtipo: "01020105000",
                        descripcion: "PSICOLOGÍA"
                    },
                    {
                        codigo: "01020106",
                        subtipo: "01020106000",
                        descripcion: "NUTRICIÓN"
                    },
                    {
                        codigo: "01020107",
                        subtipo: "01020107000",
                        descripcion: "ENFERMERÍA"
                    },
                    {
                        codigo: "01020108",
                        subtipo: "01020108000",
                        descripcion: "FISIOTERAPIA"
                    },
                    {
                        codigo: "01020109",
                        subtipo: "01020109000",
                        descripcion: "FONOAUDIOLOGÍA"
                    },
                    {
                        codigo: "01020110",
                        subtipo: "01020110000",
                        descripcion: "VACUNACIÓN"
                    },
                    {
                        codigo: "01020111",
                        subtipo: "01020111000",
                        descripcion: "SEGURIDAD Y SALUD EN EL TRABAJO"
                    },
                    {
                        codigo: "01020112",
                        subtipo: "0102012000",
                        descripcion: "OPTOMETRÍA"
                    },
                    {
                        codigo: "01020113",
                        subtipo: "01020113000",
                        descripcion: "JUNTA MÉDICA"
                    },
                    {
                        codigo: "01020114",
                        subtipo: "01020114000",
                        descripcion: "BIOÉTICA"
                    },
                ]
            },
        ]
      }
    ]
  }
]
  