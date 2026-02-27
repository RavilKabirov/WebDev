import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card';
import { product } from '../../models/product.model';
import { ProductCategories } from "../product-categories/product-categories";

@Component({
  standalone: true,
  selector: 'app-product-list',
  imports: [CommonModule, ProductCardComponent, ProductCategories],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products: product[] =[
    {
      id: 1,
      name: 'Подгузники пояса для собак кобелей, L, 12 шт.',
      description: 'Цвет: белый, синий. Особенности: одноразовый, эластичные боковины, с индикатором влаги. Количество в упаковке: 12',
      price: 2990,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pff/p2e/53162578.png?format=gallery-large',
      link: 'https://kaspi.kz/shop/p/podguzniki-pojasa-dlja-sobak-kobelei-l-12-sht--142562126/?c=750000000',
      likedByUser: false,
      likes: 100,
      categoryId: 1,
    },
    {
      id: 2,
      name: 'Adal молоко 3.2% 925 мл',
      description: 'Молоко "Adal" 3,2% - молоко питьевое, ультрапастеризованное, изготовлено из натурального коровьего молока, удобная упаковка и современные технологии позволяют употреблять такое молоко без предварительной обработки. Полезный и нужный продукт на каждый день',
      price: 750,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p71/p6d/52077494.png?format=gallery-medium',
      likes: 37,
      link: 'https://kaspi.kz/shop/p/adal-moloko-3-2-925-ml-100982670/?c=750000000',
      likedByUser: false,
      categoryId: 2,
    },
    {
      id: 3,
      name: 'Ластик Maped Technic Duo 511710, 1 шт',
      description: 'Ластик MAPED Technic Duo подойдет для удаления следов чернил и надписей, сделанных чернографитными или цветными карандашами. Ластик имеет прямоугольную форму бело-синего цвета, синяя часть предназначена для стирания чернил.',
      price: 10,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h56/h80/86018938044446.jpg?format=gallery-medium',
      likes: 15,
      categoryId: 3,
      link: 'https://kaspi.kz/shop/p/lastik-maped-technic-duo-511710-1-sht-103885134/?c=750000000',
      likedByUser: false
    },
    {
      id: 4,
      name: 'Coca-Cola газированный напиток кола 1 л',
      description: 'Coca-Cola – один из самых популярных безалкогольных напитков в истории, а также один из наиболее узнаваемых брендов в мире.Сегодня неповторимый вкус Coca-Cola знаком миллионам людей по всему миру. Она освежает и наполняет энергией, оставляя приятное пряное послевкусие.',
      price: 665 ,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pbb/pee/97763098.jpg?format=gallery-medium',
      likes: 66,
      categoryId: 2,
      link: 'https://kaspi.kz/shop/p/coca-cola-classic-gazirovannyi-napitok-1-l-100208096/?c=750000000',
      likedByUser: false
    },
    {
      id: 5,
      name: 'Apple iPhone 16 Pro Max 256Gb черный',
      description: 'Флагманский IPhone 16 Pro Max вобрал в себя лучшие черты современного гаджета. Это самое производительное устройство в линейке Apple iPhone с масштабным дисплеем, потрясающей производительностью и невероятной внешней эргономикой. Iphone 16 pro max – настоящий титан в своем семействе.',
      price: 980000,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hcf/h69/87295489343518.png?format=gallery-medium',
      categoryId: 4,
      likes: 78,
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-chernyi-123787551/?c=750000000',
      likedByUser: false
    },
    {
      id: 6,
      name: 'SMART QUA85QX2AAJXXZ 216 см черный',
      description: 'Телевизор SMART QUA85QX2AAJXXZ — ваш идеальный спутник для развлечений, предлагающий впечатляющее качество изображения и широкие возможности подключения. С диагональю 85 см и поддержкой 4K UHD, он станет центром вашего домашнего кинотеатра.',
      price: 376948,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p0f/pa8/14638174.jpeg?format=gallery-medium',
      likes: 67,
      categoryId: 4,
      link: 'https://kaspi.kz/shop/p/smart-qua85qx2aajxxz-216-sm-chernyi-131847362/?c=750000000',
      likedByUser: false
    },
    {
      id: 7,
      name: 'Яйцо Казгер-Кус куриное 30 шт 60-65 г',
      description: 'Свежие и качественные яйца станут отличной основой для множества вкусных блюд. Они - богатый источник протеина(белка), что так необходим для построения мышц.',
      price: 2349,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h10/hdd/63816604287006.jpg?format=gallery-medium',
      likes: 56,
      categoryId: 2,
      link: 'https://kaspi.kz/shop/p/jaitso-kazger-kus-kurinoe-30-sht-60-65-g-100236608/?c=750000000',
      likedByUser: false
    },
    {
      id: 8,
      name: 'Матрас Askona Prime Mix, 180x200x20 см',
      description: 'Матрас Askona PRIME MIX – сбалансированная поддержка и комфорт\n' +
        'Askona PRIME MIX – это сочетание современных технологий и высококачественных материалов, созданное для тех, кто ценит правильную поддержку позвоночника и комфортный отдых. Матрас со средней и выше средней жесткостью подходит как для людей, предпочитающих упругое спальное место, так и для тех, кто нуждается в надежной ортопедической поддержке.',
      price: 120040,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pbc/pcf/53365260.jpg?format=gallery-medium',
      likes: 45,
      categoryId: 3,
      link: 'https://kaspi.kz/shop/p/matras-askona-prime-mix-180x200x20-sm-123622481/?c=750000000',
      likedByUser: false
    },
    {
      id: 9,
      name: 'Алекс минеральная Saryagash газированная 1.5 л',
      description: 'Ваш собственный источник здоровья на каждый день. Alex Saryagash добывается из уникальной скважины глубиной 2000 метров - там, где вода проходит естественную минерализацию, насыщаясь полезными микроэлементами и приобретая свой особенный узнаваемый вкус и свойства.  ',
      price: 380,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pae/p95/10441254.jpg?format=gallery-medium',
      likes: 34,
      categoryId: 2,
      link: 'https://kaspi.kz/shop/p/aleks-mineral-naja-saryagash-gazirovannaja-1-5-l-100211003/?c=750000000',
      likedByUser: false
    },
    {
      id: 10,
      name: 'Leadbros HD-159 черный',
      description: 'Холодильник Leadbros HD-159 — компактное и стильное решение для вашей кухни, обеспечивающее эффективное хранение продуктов и энергосбережение',
      price: 94990,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p5f/p11/39085679.jpg?format=gallery-medium',
      likes: 33,
      categoryId: 4,
      link: 'https://kaspi.kz/shop/p/leadbros-hd-159-chernyi-106107741/?c=750000000',
      likedByUser: false
    },
    {
      id: 11,
      name: 'Корм Felix Аппетитные кусочки в желе говядина 75 г 1 шт',
      description: 'Каждый котик желает наслаждаться совершенно особенным кормом, у которого будет такой аппетитный вид и аромат, словно Вы приготовили его сами.',
      price: 229,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h3b/h01/84564384645150.png?format=gallery-large',
      likes: 66,
      categoryId: 1,
      link: 'https://kaspi.kz/shop/p/felix-appetitnye-kusochki-v-zhele-govjadina-75-g-1-sht-107965425/?c=750000000',
      likedByUser: false
    },
    {
      id: 12,
      name: 'Наполнитель Fyrst Буся древесный впитывающий 35 л',
      description: 'Кошачий наполнитель древесный: преимущества и функциональность. Экологичность и безопасность: наполнитель изготовлен из натуральных древесных волокон, что делает его безопасным и экологичным для вашего питомца.',
      price: 3332,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p07/p9a/31621072.jpg?format=gallery-large',
      likes: 45,
      categoryId: 1,
      link: 'https://kaspi.kz/shop/p/fyrst-busja-drevesnyi-vpityvajuschii-35-l-136731698/?c=750000000',
      likedByUser: false
    },
    {
      id: 13,
      name: 'Декорация Фигурка, грот 20053',
      description: 'Декорация для аквариума. Фигурка, грот в виде домика Спанч Боба - известного мультипликационного персонажа.',
      price: 944,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h6c/hf8/64344571019294.jpg?format=gallery-large',
      likes: 22,
      categoryId: 1,
      link: 'https://kaspi.kz/shop/p/figurka-grot-20053-106904983/?c=750000000',
      likedByUser: false
    },
    {
      id: 14,
      name: 'Носовое кольцо для быков 16985072_4605246000805',
      description: 'Тип: носовое кольцо для быков. Назначение: для носа',
      price: 390,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h99/h01/83771447148574.jpg?format=gallery-large',
      likes: 77,
      categoryId: 1,
      link: 'https://kaspi.kz/shop/p/nosovoe-kol-tso-dlja-bykov-16985072-4605246000805-113312058/?c=750000000',
      likedByUser: false
    },
    {
      id: 15,
      name: 'Paclan бумага для выпечки 8 м',
      description: 'Особая двусторонняя силиконовая бумага предотвращает пригорание и прилипание выпекаемых изделий к противню и дает возможность готовить без применения масла.',
      price: 1490,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pcc/pf7/46926054.jpg?format=gallery-large',
      likes: 38,
      categoryId: 2,
      link: 'https://kaspi.kz/shop/p/paclan-bumaga-dlja-vypechki-8-m-101053421/?c=750000000',
      likedByUser: false
    },
    {
      id: 16,
      name: 'Игрушка-мялка gorilla черный',
      description: 'Игрушка-мялка Gorilla — оригинальный способ снять стресс и развить моторику. Эта игрушка станет отличным спутником для детей и взрослых, обеспечивая удовольствие и расслабление в любой ситуации.',
      price: 1199,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/ha7/h8e/85379642621982.jpg?format=gallery-large',
      likes: 95,
      categoryId: 3,
      link: 'https://kaspi.kz/shop/p/igrushka-mjalka-gorilla-chernyi-112143759/?c=750000000',
      likedByUser: false
    },
    {
      id: 17,
      name: 'Зенетар ходунки 4882 до 100 кг',
      description: 'Шагающие ходунки - идеальное решение для людей пожилого возраста или в период реабилитации, которым важны прогулки на свежем воздухе. ',
      price: 11300,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h63/hd9/83129069568030.jpg?format=gallery-large',
      likes: 56,
      categoryId: 3,
      link: 'https://kaspi.kz/shop/p/zenetar-hodunki-4882-do-100-kg-112823596/?c=750000000',
      likedByUser: false
    },
    {
      id: 18,
      name: 'Снековый автомат Хватайка желтый',
      description: 'Этот автомат станет отличным дополнением для игровых залов, торговых центров и развлекательных комплексов.',
      price: 290000,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/peb/p3c/14198170.jpeg?format=gallery-large',
      likes: 11,
      categoryId: 3,
      link: 'https://kaspi.kz/shop/p/hvataika-zheltyi-131718978/?c=750000000',
      likedByUser: false
    },
    {
      id: 19,
      name: 'Смарт-кольцо OEM R06 черный',
      description: 'Шаги, расстояние, подсчет калорий, мониторинг сна. Измеряет артериальное давление по своим показателям, не выдает двойное значение как тонометр.',
      price: 12000,
      rating: 4.2,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p50/pad/7994276.jpeg?format=gallery-large',
      likes: 13,
      categoryId: 4,
      link: 'https://kaspi.kz/shop/p/smart-kol-tso-oem-r06-chernyi-129950263/?c=750000000',
      likedByUser: false
    },
    {
      id: 20,
      name: 'Электронная книга ONYX BOOX Go 6 черный',
      description: 'Электронная книга ONYX BOOX Go 6 — совершенное устройство для чтения, которое сочетает в себе высокое качество изображения и удобство использования. ',
      price: 84151,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/he5/he2/87125048918046.png?format=gallery-large',
      likes: 23,
      categoryId: 4,
      link: 'https://kaspi.kz/shop/p/onyx-boox-go-6-chernyi-123574615/?c=750000000',
      likedByUser: false
    }
  ];
  selectedCategoryId: number | null = null;
  get filteredProducts(): product[]{
    if(!this.selectedCategoryId){
      return this.products;
    }
    else{
      return this.products.filter(p => p.categoryId === this.selectedCategoryId);
    }
  }
  onCategoryChange(categoryId: number | null){
    this.selectedCategoryId = categoryId;
  }
  likeProduct(product: product) {
  if (!product['likedByUser']) {
    product.likes = (product.likes ?? 0) + 1;
    product['likedByUser'] = true;
  } else {
    product.likes = (product.likes ?? 0) - 1;
    product['likedByUser'] = false;
  }
}
  deleteProduct(product: product) {
    this.products = this.products.filter(p => p.id !== product.id);
  }
}