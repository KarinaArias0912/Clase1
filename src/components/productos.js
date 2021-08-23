import React from "react";
import estilos from "./estilos.css";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Badge from "@material-ui/core/Badge";
import "bootstrap/dist/css/bootstrap.min.css";

export const p =[

	{ itemId: '1', quantity: 1, title: 'Maquina', description:'Maquina de Afeitar acero inoxidable', price:'$900',pictureUrl:'https://www.kompost.com.ar/wp-content/uploads/2021/02/Afeitadora-de-3-piezas-Frontal_large.jpg'},
	{ itemId: '2', quantity: 3, title:'Shampoo', description:'Shampoo solido libre de sulfatos', price:'$750', pictureUrl:'https://http2.mlstatic.com/D_NQ_NP_974137-MLA45158495114_032021-O.webp'},
	{ itemId: '3', quantity: 10,  title:'Cepillo', description:'Cepillo de Dientes de bamboo', price:'$750', pictureUrl:'https://www.brushwithbamboo.com/wp-content/uploads/2018/01/adult-single-no-cert.jpg'},
    { itemId: '4', quantity: 5,  title:'Repasadores', description:'Repasadores reutilizables lavables', price:'$2500', pictureUrl:'http://cdn.ecommercedns.uk/files/6/223396/8/11662518/reusable-kitchen-roll.jpg'},
    { itemId: '5', quantity: 4, title:'Capsula', description:'Capsulas de silicona reutilizables', price:'$650', pictureUrl:'https://verk.store/eng_pl_3-x-Dolce-gusto-reusable-coffee-capsules-2617_2.jpg'},
    { itemId: '6', quantity: 10, title:'Pajilla', description:'Pajillas de Acero Inoxidable', price:'$250', pictureUrl:'https://www.sherpa.com.au/assets/full/SB2PSG2.jpg?20210615141921'},
    { itemId:'7', quantity: 5, title:'Envoltorio', description:'Envoltorio Ecologico de Tela y Cera de Abejas', price:'$750', pictureUrl:'https://m.media-amazon.com/images/I/A1WMTs4HbyL._AC_SL1500_.jpg'},
    { itemId:'8', quantity: 10, title:'Esponja', description:'Esponja natural Lufa', price:'$450', pictureUrl:'https://m.media-amazon.com/images/I/71pc0eIAm5L._SL1500_.jpg'},
    { itemId:'9', quantity: 5, title:'Toallas', description:'Toallas desmaquillantes Reutilizables', price:'$850', pictureUrl:'https://e00-telva.uecdn.es/assets/multimedia/imagenes/2019/12/01/15752318863120.jpg'},
    { itemId:'10', quantity: 10, title:'Compostera', description:'Compostera para interiores o exteriores', price:'$2500', pictureUrl:'https://m.media-amazon.com/images/I/41OY0ymyYoL._AC_.jpg'},
    { itemId:'11', quantity: 5, title:'Set Cocina', description:'Set de Cocina de Bamboo', price:'$1000', pictureUrl:'https://m.media-amazon.com/images/I/61HqF4XEQ8L._AC_SX466_.jpg'},
    { itemId:'12', quantity: 10, title:'Chemex', description:'Cafetera Chemex', price:'$3500', pictureUrl:'https://media.fds.fi/product_image/800/3KaffaRoastery_iso.jpg'},
    { itemId:'13', quantity: 5, title:'Desodorante', description:'Desodorante Solido', price:'$450', pictureUrl:'https://www.aupaorganics.com/4280/desodorante-solido-de-palmarosa.jpg'},
    { itemId:'14', quantity: 10, title:'Aceites', description:'Aceites Escenciales', price:'$1500', pictureUrl:'https://m.media-amazon.com/images/I/61QS5bCC0eL._AC_SX466_.jpg'},
    { itemId:'15', quantity: 5, title: 'Bolsa', description:'Bolsas Ecologicas', price:'$250', pictureUrl:'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTdCYSWGjPpN8pfy5RKncrYVTak6vn9Dj4O8iQyM16LbBjy1akrauOcCdpd_YbdVCYI1f_ap-PpesEfhs7IY8Pp7FEhMcqKwyOGjcf_trfu&usqp=CAE'},
    { itemId:'16', quantity: 10, title:'Jabon', description:'Jabon Lavarropas Ecologico', price:'$500', pictureUrl:'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSyGNBwzRV0zNstHbKlMgQXxTYRDQaezLbBXlUjZcDsXqGiH-Ol5xj336rihZcAUr2fgvaRysCurXn0W4Y0pY_9nQPt2at8-UkR66jgFqQwfyQfi49OqzF7pDrf&usqp=CAE'},
];