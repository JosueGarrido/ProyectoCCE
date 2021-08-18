import React from 'react';
import '../styles/InfoPages.css'
import ArtistMenuDashboard from "../components/ArtistMenuDashboard";
import { Divider, Row, Col, Layout, Typography, Collapse } from 'antd';
import {CaretRightOutlined } from '@ant-design/icons';
import Routes from "../constants/routes";
import HowBuy from '../images/ImgPages/comprar-imagen.png';
import letraComprar from '../images/ImgPages/comprar-letras.png';
import logoVertical from '../images/logoVertical.png';

const { Title } = Typography;
const {  Content, Sider } = Layout;

const Header = Layout.Header;
const {Panel} =Collapse;
const TermsConditions = props => {
    return(
        <>

            <Row type='flex' justify='center' className='header-wrapper' style={{position:"relative"}}>
                <Col span={24}>
                    <Header className='headerPage'>
                        <Row type='flex' justify='space-between' align='bottom'>


                            <Col span={7} align='left' className='main-menu'>


                            </Col>
                            <Col span={10} align='center'>
                                <a href={Routes.HOME}>
                                    <img className='logoPages' src={letraComprar}/>
                                </a>
                            </Col>



                            <Col span={1}>

                            </Col>
                            <Col span={3}>
                                <nav>
                                    <ul>
                                        <li><a href="#"> <i className="down-shadow-menu"></i></a>
                                            <ul style={{textAlign: "center"}} >
                                                <li><a href={Routes.CATEGORY1.replace( ':id', 1 )}>Categorias</a></li>
                                                <li><a href={Routes.ARTIST.replace( ':id', 1 )}>Artistas</a></li>
                                                <li><a href={Routes.LOGIN_CLIENT}>Comprar</a></li>
                                                <li><a href={Routes.LOGIN}>Vender</a></li>
                                                <li><a href={Routes.LOGOUT}>Salir</a></li>
                                            </ul>
                                        </li>

                                    </ul>
                                </nav>
                            </Col>
                            <Col span={3}>
                                <img src={logoVertical} className='logoPages'/>
                            </Col>



                        </Row>

                    </Header>

                </Col>

            </Row>
            <Content className="margin" >
                <img src={HowBuy} className="imagesPageHB"/>

                <div className="imgPage">
                    <Row >
                        <Col span={3}>
                        </Col>

                        <Col span={18}><br/><br/>
                            <p className="text3"><b>Información Legal.- </b>La Casa de la Cultura Ecuatoriana “Benjamín Carrión”, es una institución pública, sin fines de lucro, creada con el fin de promover y estimular el desarrollo cultural y libertad de pensamiento en Ecuador. Se constituyó según Decreto Ejecutivo No. 707, el 9 de agosto de 1944, emitido por el Presidente de la República del Ecuador, José María Velasco Ibarra. Se encuentra ubicada en la Av. Seis de Diciembre N16-224 y Patria, parroquia La Mariscal, en la ciudad de Quito – Ecuador, teléfono 2528840, y correo electrónico …….……………………).</p>

                            <p className="text3"><b>Objeto.-</b>“La Casa de la Cultura Ecuatoriana Benjamín Carrión es el espacio de encuentro común, de convivencia y de ejercicio de los derechos culturales, en el que se expresa la diversidad cultural y artística, la memoria social y la interculturalidad”.</p>
                            <h1 className="title">
                                1.- Condiciones y Políticas de Uso y Datos
                            </h1>
                            <p className="text3">Al ingresar y utilizar este portal de Internet, cuyo nombre de dominio es www.wasiwallpay.com, el usuario está aceptando los presentes términos y condiciones, (en adelante los “Términos y Condiciones”), y declara expresamente su aceptación utilizando para tal efecto los que se aplican a los servicios que ofrece la plataforma de exhibición y venta online de productos artísticos y artesanías en sus diversas manifestaciones (en adelante los “Servicios”) prestados por Wasi Wallpay. Este Sitio Web especializado en arte y cultura, es propiedad de la CASA DE LA CULTURA ECUATORIANA “BENJAMÍN CARRIÓN”–SEDE NACIONAL, institución pública, constituida bajo las leyes ecuatorianas.

                                El acceso al Sitio Web; la creación de una cuenta en el Sitio Web para exhibir y vender productos o servicios lícitos en el Sitio Web; y, la utilización del mismo, implican la aceptación incondicional de los Términos y Condiciones. Esto constituye un contrato legalmente vinculante entre usted y Wasi Wallpay.

                                En caso de que el Usuario no acepte en forma íntegra, completa y absoluta estos Términos y Condiciones, no puede optar por la aplicación parcial de los mismos y deberá abstenerse de comprar o hacer uso del sitio web www.wasiwallpay.com Igualmente, si en cualquier momento, el Usuario no estuviere de acuerdo, total o parcialmente con estos Términos y Condiciones, deberán abstenerse inmediatamente de usar el Sitio Web.

                                En caso de que el usuario acceda, utilice el sitio web www.wasiwallpay.com se considerará como absoluta y expresa aceptación de las condiciones establecidas en estos Términos y Condiciones Generales y en las Políticas de Privacidad de www.wasiwallpay.com, obligándose a cumplir expresamente con las mismas, sin poder alegar el desconocimiento de las mismas.

                                Es importante que lean atentamente y comprendan las condiciones descritas en los presentes Términos y Condiciones, puesto que presentan las condiciones generales que regulan el acceso, navegación, uso de datos y del sitio web de Wasi Wallpay, así como las responsabilidades por su utilización, proporcionan información importante relacionada con sus obligaciones en cuanto a contenido, limitación de responsabilidad y su consentimiento expreso para solucionar mediante arbitraje toda disputa que se pudiera plantear.

                                Estos Términos y Condiciones entrarán en vigor y serán exigibles desde el momento en que el Usuario acceda por primera vez al Sitio Web, creen Cuentas de Compradores y/o Vendedores remitan cualquier tipo de información al Sitio Web y estarán vigentes mientras los Usuarios hagan uso del Sitio Web.

                                Cualquier modificación a estos Términos y Condiciones de uso será realizada cuando el titular de la misma, en este caso Wasi Wallpay lo considere apropiado/adecuado, siendo exclusiva responsabilidad del usuario asegurarse de tomar conocimiento de tales modificaciones.
                            </p>
                            <h1 className="title">
                                2. Capacidad Legal
                            </h1>
                            <p className="text3">Los productos y servicios que ofrece Wasi Wallpay, sólo están disponibles para personas que tengan capacidad legal para contratar. No podrán utilizar los servicios las personas que no tengan esa capacidad y los menores de edad. Los actos que éstos realicen en este sitio serán responsabilidad de sus padres, tutores, encargados o curadores, y por tanto se considerarán realizados por éstos en ejercicio de la representación legal con la que cuentan. Quien registre un Usuario como empresa, deberá tener capacidad para contratar a nombre de tal entidad y de obligar a la misma en los términos de este Acuerdo.</p>

                            <h1 className="title">
                                3. Tipos de Usuarios
                            </h1>
                            <p className="text3">En Wasi Wallpay existen dos tipos de usuarios: Artistas y artesanos vendedores; y, Usuarios visitantes.</p>
                            <h1 className="title">
                                3.1 Artistas y artesanos vendedores
                            </h1>

                            <p className="text3">Las personas naturales o jurídicas que deseen exhibir y vender sus productos artísticos o artesanía en el Sitio Web (en adelante los “Vendedores”) deberán crear una cuenta personal, sin costo (en adelante la “Cuenta de Vendedor”), y llenar de manera obligatoria el formulario de registro con información verídica, correcta y actualizada de sus datos personales, trayectoria, su trabajo artístico, indispensables para un mejor servicio desde el sitio web.

                                Una vez completado el registro, se le activará su perfil desde su correo electrónico.

                                Los artistas y/o artesanos vendedores serán los únicos responsables de la veracidad y exactitud de la información e imágenes de los productos a promocionar, cargadas al Sitio Web, en la Vitrina Virtual de Exhibición (en adelante “la Vitrina Virtual”). Los artistas y/o artesanos Vendedores se obligan a poner a disposición contenidos reales, lícitos, legítimos y originales de sus obras artísticas y artesanías para su comercialización, que sea permitida y cumpla con la ley. Asimismo, los Exhibidores Vendedores se comprometen a utilizar el Sitio Web y sus servicios, en cumplimiento de la legislación aplicable vigente y el orden público.

                                Los artistas y/o artesanos vendedores se comprometen a notificar a www.wasiwallpay.com en forma inmediata y por medio idóneo y fehaciente, cualquier uso no autorizado de su Cuenta y/o Clave, así como el ingreso por terceros no autorizados a la misma. Se aclara que está prohibida la venta, cesión, préstamo o transferencia de la Clave y/o Cuenta bajo ningún concepto.

                                El Sitio Web mantiene una política estricta y precisa en cuanto a la exhibición y venta de los productos que forman parte de la Vitrina Virtual del Sitio Web. Todos los productos exhibidos deberán cumplir toda legislación y normativa aplicables a estos Términos y Condiciones, así como con toda la legislación vigente aplicable a nuestro territorio.
                                Por lo tanto, queda prohibida la exhibición de productos en el Sitio Web de: 1) Productos robados o falsificados; 2) Productos usados; 3) Productos defectuosos o retirados-descartados; 4) Armas; 5) Productos con el nombre o marca de una compañía, un diseñador o un artista en su título o descripción, en el caso de que dichos productos hayan sido realizados de manera ilegal o sin la autorización expresa de la compañía, diseñador o artista; 6) Productos violatorios de los derechos de autor, marcas registradas, confidencialidad, secretos industriales o cualquier derecho de propiedad intelectual de un tercero; 7) Productos fabricados con marfil o especies en peligro de extinción; 8) Productos con contenido ofensivo, violento, obsceno, cruel o inapropiado en los nombres, descripciones, logotipos o imágenes de dichos productos. Wasi Wallpay, se reserva el derecho de bloquear el acceso o remover en forma parcial o total toda información, comunicación o material que a su exclusivo juicio pueda resultar blasfemia o símbolos que representen blasfemia, contenido pornográfico o sexualmente violento o explícito, fraudulento, engañoso apoyo, representación o exaltación de actividades ilegales; apoyo, representación o exaltación de violencia hacia terceros o uno mismo; apoyo, representación o exaltación de odio, intolerancia, difamatorio u obsceno, violencia o burla hacia un grupo de personas o apoyo de organizaciones que alientan estas actitudes; apoyo o exaltación de crueldad hacia los animales. En el caso de que los artistas y/o artesanos Vendedores presenten en la Vitrina Virtual productos o servicios que contravengan lo aquí dispuesto, el Sitio Web podrá eliminar inmediatamente de su Vitrina Virtual y cancelar su Cuenta de Usuario.
                            </p>

                            <h1 className="title">
                                3.2. Usuarios visitantes
                            </h1>
                            <p className="text3">El usuario visitante será el responsable de todas las operaciones efectuadas en su Cuenta, pues el acceso a la misma está restringido al uso de su Clave Secreta y de conocimiento exclusivo del usuario visitante. Se compromete a notificar a www.wasiwallpay.com en forma inmediata y por medio idóneo y fidedigno, cualquier uso no autorizado de su Cuenta y/o Clave, así como el ingreso de terceros no autorizados a la misma.

                                Por otro lado, el simple hecho de conectarse con el Sitio Web para visitar la Vitrina Virtual de Wasi Wallpay y solicitar cotizaciones a los artistas y artesanos vendedores, el usuario visitante que consulta el Sitio Web (en adelante el “Usuario Visitante”) acepta del Sitio Web las condiciones obligatorias que se describen:

                                <br/> • Los usuarios visitantes deberán completar los datos solicitados en el formulario de registro en todos sus campos con datos válidos para convertirse en usuario visitante de www.wasiwallpay.com, acceder a las promociones, y para la adquisición de los productos y/o servicios, boletines o material publicitario que se exhiben en la Vitrina Virtual.

                                <br/>• Los usuarios visitantes deberán abastecer de información personal de manera exacta, precisa y verídica; asume el compromiso de actualizar los Datos Personales conforme resulte necesario y www.wasiwallpay.com podrá utilizar diversos medios para identificar a sus Usuarios, pero www.wasiwallpay.com la Tienda Vitrina Virtual NO se responsabiliza por la certeza de los Datos Personales provistos por sus usuarios visitantes. Los Usuarios Visitantes garantizan y responden, en cualquier caso, de la exactitud, veracidad, vigencia y autenticidad de los datos personales ingresados.

                                <br/>• Los usuarios visitantes declaran que conocen y aceptan que la Vitrina Virtual contiene una exposición general de los productos y servicios ofrecidos por los artistas o artesanos vendedores. Las transacciones de compra y venta de los productos y servicios de la Vitrina Virtual se realizarán entre el usuario visitante y el artista o artesano vendedor, sin que el Sitio Web, sus administradores o la CCE sean parte de dichas transacciones, ni responsables de las mismas.

                                <br/>• Los usuarios visitantes declaran que conocen y aceptan que no podrán iniciar ningún tipo de acción legal en contra del Sitio Web o la CCE, en caso de que los productos o servicios de la Vitrina Virtual no sean exactos a los seleccionados en su compra.

                                <br/>• Los usuarios visitantes deberán hacer uso de la información disponible en el Sitio Web, en cumplimiento de la normativa aplicable. Los usuarios visitantes deberán abstenerse, en relación con las informaciones a las que acceden, de recopilar, hacer uso indirecto y, de manera general, de cualquier acto susceptible de constituir un atentado contra la vida privada o la reputación de un tercero.

                                <br/>• Los usuarios visitantes tienen prohibición expresa de reproducir el contenido del Sitio Web en cualquier soporte para uso colectivo o profesional, así como internamente en una empresa, por medios electrónicos para su difusión a través de redes informáticas internas de empresas u organismos o corporaciones.

                                <br/>• La violación de estas disposiciones expone al infractor o transgresor a las sanciones civiles y penales a las que hubiere lugar bajo la legislación aplicable.
                            </p>

                            <h1 className="title">
                                4. Manejo de Datos e Información
                            </h1>
                            <p className="text3">Los artistas y artesanos vendedores y usuarios visitantes reconocen que la recopilación y los tratamientos por parte del Sitio Web y CCE de los datos personales e información solicitados y entregados libre y voluntariamente por los artistas y artesanos vendedores y usuarios visitantes, como información personal, trayectoria artística, imágenes y fotografías son indispensables para prestar el Servicio de exhibición virtual.

                                Los artistas y artesanos vendedores autorizan expresamente al Sitio Web el uso de dicha información, con fines estrictamente de comunicación y publicidad en línea, ya sea en redes sociales como Facebook, Twitter, Linkedin, Pinterest, Google Plus, Youtube, etc., al igual que en medios físicos fuera de la red.

                                Los artistas y artesanos vendedores, autorizan en forma expresa al sitio Web y a la CCE el uso de textos, fotografías, vídeos y cuanto contenido requieran para que se publiquen en el Sitio Web, autorizando el uso a título gratuito de esta información y declaran que para el caso de imágenes, estas son de su propiedad o que tienen las autorizaciones correspondientes para hacer uso de ellas.

                                De acuerdo con lo que establece el Art. 212 del Código Orgánico de la Economía Social de los Conocimientos, los artistas y artesanos vendedores aceptan y declaran que la presencia de su obra en la Vitrina Virtual de Exhibición se realiza exclusivamente con fines de comunicación pública y de exhibición para dar a conocer sus obras. Los artistas y artesanos vendedores declaran y aceptan que la presencia de su obra en Wasi Wallpay no constituye ni constituirá violación alguna a sus derechos patrimoniales, como titulares del derecho de autor sobre las obras de arte y obras plásticas, y, consecuentemente, no tienen derecho a remuneración alguna por dicha presencia en la Vitrina Virtual de Exhibición.

                                Esta plataforma se constituye sobre todo en una herramienta de promoción, difusión y apoyo a la comercialización de la cultura y las artes y de activación de la economía de la cultura, para lo cual los artistas y artesanos vendedores autorizan expresamente la reproducción de sus obras en el Sitio Web.
                                Sin perjuicio, de lo anterior, los artistas y artesanos vendedores, declaran que conocen y aceptan que Wasi Wallpay es una plataforma en la que la utilización de las obras de artes plásticas se realiza “con fines exclusivamente de anunciar la exposición pública o venta de las mismas”. La presencia en el Sitio Web no implica la puesta de las obras a disposición del público en soporte material, arrendamiento o alquiler. Las transacciones de venta de las obras de arte se realizarán entre los Usuarios Visitantes y los artistas y artesanos vendedores. Los artistas y artesanos vendedores declaran que conocen y aceptan que, dada la naturaleza del Sitio Web, éste no tiene ni tendrá obligación alguna a obtener derecho a una participación de acuerdo a lo que dispone el Art. 158 del Código Orgánico de la Economía Social de los Conocimientos, Creatividad e Innovación.

                                En cualquier caso, las obras que se presenten en la Vitrina Virtual de Exhibición serán obras promocionadas en los términos que disponen el Código Orgánico de la Economía Social de los Conocimientos, Creatividad e Innovación.

                            </p>

                            <h1 className="title">
                                5. Propiedad Intelectual y Derechos de Autor
                            </h1>
                            <p className="text3">La estructura general del Sitio, la dirección URL en la que está disponible, el nombre del dominio correspondiente, su identidad gráfica, sus imágenes animadas o no, fotografías, textos, sonidos que se incluyan, sus logotipos y marcas que aparecen en este Sitio, son propiedad de Wasi Wallpay.
                                Wasi Wallpay, es titular de los derechos de propiedad intelectual e industrial de este sitio web o cuenta con la correspondiente licencia o autorización para su uso. Es titular de los derechos de propiedad intelectual, industrial y de imagen sobre los contenidos disponibles en este sitio web, o cuenta con la autorización necesaria para su utilización. El acceso, navegación y uso de este sitio web por parte del Usuario no implica en ningún caso renuncia, transmisión ni cesión total o parcial por parte de Wasi Wallpay de los citados derechos. En consecuencia, no está permitido suprimir, modificar, eludir o manipular el aviso de derechos de autor, marcas, nombres comerciales, artísticos, anuncios, logotipos, bases de datos y cualquier otro dato de identificación de los derechos de Wasi Wallpay o de sus titulares incorporados a los contenidos, sin la autorización expresa de sus titulares.
                                Se prohíbe reproducir, modificar, reutilizar, explotar, comunicar públicamente, cargar archivos, enviar por correo, transmitir, usar, tratar o distribuir de cualquier forma la totalidad o parte de los contenidos incluidos en el sitio web para propósitos públicos o comerciales, si no se cuenta con la autorización previa y expresa por escrito de Wasi Wallpay o, en su caso, del titular de los derechos a que corresponda. El nombre Wasi Wallpay y sus correspondientes logos son marcas registradas y queda prohibida su reproducción o uso sin la autorización de su titular. La legitimidad de los derechos de propiedad intelectual o industrial correspondientes a los contenidos aportados por terceros es de su exclusiva responsabilidad. Su uso sin autorización previa y expreso de la CCE, constituye un acto ilícito.
                                La aceptación de estos Términos y Condiciones implica la obligación de los usuarios visitantes; artistas y artesanos vendedores a no reproducir ningún elemento del sitio sin autorización previa, expresa y por escrito del titular.
                            </p>

                            <h1 className="title">
                                6. Ayuda para navegar
                            </h1>
                            <p className="text3">Se informa a los <b>usuarios visitantes y los artistas y artesanos vendedores</b> que para el buen funcionamiento del Sitio Web se realizará sus mejores esfuerzos para prestar el servicio de manera ininterrumpida, salvo interrupciones por mantenimiento, caso fortuito o fuerza mayor y a enmendar los errores que puedan surgir, tan pronto como sea posible.
                                El Sitio Web se reserva el derecho de modificar los Términos y Condiciones, las funcionalidades del Sitio Web y las reglas de funcionamiento de la plataforma, las mismas que se ajustarán a derecho, estándares éticos y a las buenas costumbres.
                                Nos reservamos el derecho de en cualquier momento:
                                <br/>•	Modificar, de conformidad con la legislación aplicable, las condiciones de los términos y condiciones aquí descritos.
                                <br/>•	Modificar el Sitio Web, ya sea mediante la eliminación o interrupción de todo tipo de Información o funciones del mismo, ya sea en parte o en su totalidad; y,
                                <br/>•	Negar o cancelar la autorización de uso o acceso al Sitio Web.
                                Toda modificación realizada por nuestra parte en las condiciones de los Términos y Condiciones se hará efectiva una vez que dichos cambios estén disponibles en el Sitio Web. Usted confirma que el uso continuado que usted haga del Sitio Web una vez realizadas las modificaciones supondrá la aceptación por su parte de dichas modificaciones. En el caso de que no se muestre de acuerdo con las modificaciones o actualizaciones realizadas en el Sitio Web, deberá interrumpir el uso del mismo. Se recomienda que consulte esta página cada cierto tiempo a fin de familiarizarse con la versión más actualizada de los Términos y Condiciones.
                            </p>

                            <h1 className="title">
                                7. Cláusula de Resolución de Controversias
                            </h1>
                            <p className="text3">La Constitución faculta el empleo de la mediación para la solución de controversias. El artículo 11 de la Ley Orgánica de la Procuraduría General del Estado prescribe que las personas jurídicas del sector público pueden someterse al procedimiento de mediación; y, la Ley Orgánica del Sistema Nacional de Contratación Pública establece que la mediación es un método válido para la solución de las controversias que surjan de los contratos.

                                En este caso, toda controversia o diferencia derivada de la parte técnica y/o de navegación dentro de Wasi Wallpay se las someterán a la Resolución del Centro de Mediación y Arbitraje de la Procuraduría General del Estado o ante los jueces determinados en la Ley de Modernización del Estado reformada.
                                En lo que se refiere a la relación comercial entre usuarios visitantes y artistas y artesanos vendedores, se convierte en un contrato entre las partes (intra partes) artista ofertante – interesado comprador. El promotor de la tienda se exime de toda responsabilidad civil, penal, administrativa, tributaria, comercial y de cualquier otra índole que se deriven de esta relación. No será responsable ni responderá por daños o afectaciones derivadas de la Ley Orgánica de Defensa del Consumidor.
                            </p><br/><br/><br/>
                        </Col>

                        <Col span={3}>
                        </Col>
                    </Row>


                </div>
            </Content>


        </>
    );

};

export default TermsConditions;
