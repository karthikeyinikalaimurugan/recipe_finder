export const appData = {
    header:{
        logo: '/img/logo.png',
        brandName: '',
    },
    stripMenus:[
        {
            label: 'Forums',
            link: '',
        },
        {
            label: 'Categories',
            link: '',
        },
        {
            label: 'Books',
            link: '',
        },
        {
            label: 'Recipe Index',
            link: '',
        },
        {
            label: 'Popular',
            link: '',
        }
    ],
    navs: [
        {
            label: 'Forums',
            link: '',
        },
        {
            label: 'Categories',
            link: '',
        },
        {
            label: 'Books',
            link: '',
        },
        {
            label: 'Recipe index',
            link: '',
        },
        {
            label: 'Popular',
            link: '',
        },
    ],
    menuBar: [
        {
            label: 'HOME',
            link: '',
        },
        {
            label: 'CATEGORIES',
            link: '',
        },
        {
            label: 'RECIPES',
            link: '',
        },
        {
            label: 'CONTACT',
            link: '',
        },
        {
            label: 'ABOUT',
            link: '',
        },
    ],
    socialLinks: [
        {
            icon: 'fa-instagram',
            link: 'https://instagram.com',
        },
        {
            icon: 'fa-twitter',
            link: 'https://twitter.com',
        },
        {
            icon: 'fa-facebook',
            link: 'https://facebook.com',
        },
        {
            icon: 'fa-pinterest',
            link: 'https://pinterest.com',
        },
        {
            icon: 'fa-rss',
            link: '',
        },
        {
            icon: 'fa-youtube',
            link: 'https://youtube',
        },
    ],
    filters: {
        "By Season": [{
            name:'Autumn',
            slug: 'autumn',
        },{
            name:'Spring',
            slug: 'spring',
        },{
            name:'Summer',
            slug: 'summer',
        },{
            name:'Winter',
            slug:'winter',
        }],
        "By Dietary Preference": [{
            name:'Dairy Free',
            slug: 'dairy-free',
        },{
            name:'Egg Free',
            slug: 'egg-free',
        },{
            name:'Gluten Free',
            slug: 'gluten-free',
        },{
            name:'Healthy',
            slug:'healthy',
        },{
            name:'Quick and Easy',
            slug: 'quick-and-easy',
        }],
        "By Meal": [
            {
                name:'Breakfast',
                slug: 'breakfast',
            },
            {
                name:'Dessert',
                slug: 'dessert',
            },
            {
                name:'Dinner',
                slug: 'dinner',
            },
            {
                name:'Holidays',
                slug: 'holidays',
            },
            {
                name:'Snacks and Appetizers',
                slug: 'snacks-and-appetizers',
            }],
        "Sweet Things": [
            {
                name:'Fruit Desserts',
                slug: 'fruit-desserts',
            },
            {
                name:'Chocolates',
                slug: 'chocolates',
            },
            {
                name:'Cakes and Quick Breads',
                slug: 'cakes-and-quick-breads',
            }]
    }
}

export const allProducts = [
    {
        title: 'Product1',
        estimated_time: '30 MINUTES',
        isPopular:true,
        isOrganic: false,
        isSuperEasy: true,
        img: '/img/products/g1.jpg',
        attributes: {
            "By Season": ['autumn','winter'],
            "By Dietary Preference": ['egg-free'],
            "By Meal": ['dinner','dessert'],
            "Sweet Things": ['cakes-and-quick-breads']
        }
    },
    {
        title: 'Product2',
        estimated_time: '30 MINUTES',
        isPopular:false,
        isOrganic: false,
        isSuperEasy: true,
        img: '/img/products/g1.jpg',
        attributes: {
            "By Season": ['autumn'],
            "By Dietary Preference": ['healthy'],
            "By Meal": ['snacks-and-appetizers'],
            "Sweet Things": ['chocolates']
        }
    },
    {
        title: 'Product3',
        estimated_time: '30 MINUTES',
        isPopular:false,
        isOrganic: true,
        isSuperEasy: true,
        img: '/img/products/g1.jpg',
        attributes: {
            "By Season": ['winter'],
            "By Dietary Preference": ['quick-and-easy'],
            "By Meal": ['dessert'],
            "Sweet Things": ['chocolates']
        }
    },
    {
        title: 'Product4',
        estimated_time: '30 MINUTES',
        isPopular:false,
        isOrganic: false,
        isSuperEasy: true,
        img: '/img/products/g1.jpg',
        attributes: {
            "By Season": [],
            "By Dietary Preference": ['egg-free'],
            "By Meal": ['holidays'],
            "Sweet Things": ['cakes-and-quick-breads']
        }
    },
    {
        title: 'Product5',
        estimated_time: '30 MINUTES',
        isPopular:false,
        isOrganic: true,
        isSuperEasy: true,
        img: '/img/products/g1.jpg',
        attributes: {
            "By Season": ['autumn','winter'],
            "By Dietary Preference": ['healthy'],
            "By Meal": ['breakfast'],
            "Sweet Things": ['fruit-desserts']
        }
    },
    {
        title: 'Product6',
        estimated_time: '30 MINUTES',
        isPopular:false,
        isOrganic: false,
        isSuperEasy: true,
        img: '/img/products/g1.jpg',
        attributes: {
            "By Season": [],
            "By Dietary Preference": ['dairy-free'],
            "By Meal": ['snacks-and-appetizers', 'holidays'],
            "Sweet Things": ['chocolates']
        }
    },
    {
        title: 'Product7',
        estimated_time: '30 MINUTES',
        isPopular:false,
        isOrganic: true,
        isSuperEasy: true,
        img: '/img/products/g1.jpg',
        attributes: {
            "By Season": ['autumn'],
            "By Dietary Preference": ['quick-and-easy'],
            "By Meal": ['holidays'],
            "Sweet Things": []
        }
    },
    {
        title: 'Product8',
        estimated_time: '30 MINUTES',
        isPopular:false,
        isOrganic: false,
        isSuperEasy: true,
        img: '/img/products/g1.jpg',
        attributes: {
            "By Season": ['autumn'],
            "By Dietary Preference": ['egg-free'],
            "By Meal": ['dinner','snacks-and-appetizers'],
            "Sweet Things": ['fruites-desserts']
        }
    },
    {
        title: 'Product9',
        estimated_time: '30 MINUTES',
        isPopular:false,
        isOrganic: true,
        isSuperEasy: true,
        img: '/img/products/g1.jpg',
        attributes: {
            "By Season": ['summer', 'spring'],
            "By Dietary Preference": ['dairy-free'],
            "By Meal": ['dessert', 'breakfast'],
            "Sweet Things": []
        }
    },
    {
        title: 'Product10',
        estimated_time: '30 MINUTES',
        isPopular:false,
        isOrganic: false,
        isSuperEasy: true,
        img: '/img/products/g1.jpg',
        attributes: {
            "By Season": [],
            "By Dietary Preference": ['healthy'],
            "By Meal": ['snacks-and-appetizers', 'breakfast'],
            "Sweet Things": ['cakes-and-quick-breads']
        }
    },
    {
        title: 'Product11',
        estimated_time: '30 MINUTES',
        isPopular:false,
        isOrganic: true,
        isSuperEasy: true,
        img: '/img/products/g1.jpg',
        attributes: {
            "By Season": ['summer'],
            "By Dietary Preference": ['quick-and-easy'],
            "By Meal": ['snacks-and-appetizers'],
            "Sweet Things": ['chocolates']
        }
    },
    {
        title: 'Product12',
        estimated_time: '30 MINUTES',
        isPopular:false,
        isOrganic: false,
        isSuperEasy: true,
        img: '/img/products/g1.jpg',
        attributes: {
            "By Season": ['autumn'],
            "By Dietary Preference": ['quick-and-easy'],
            "By Meal": ['dessert'],
            "Sweet Things": ['cakes-and-quick-breads']
        }
    },
    {
        title: 'Product13',
        estimated_time: '30 MINUTES',
        isPopular:false,
        isOrganic: true,
        isSuperEasy: true,
        img: '/img/products/g1.jpg',
        attributes: {
            "By Season": ['spring'],
            "By Dietary Preference": ['dairy-free'],
            "By Meal": ['dessert'],
            "Sweet Things": ['chocolates']
        }
    },
    {
        title: 'Product14',
        estimated_time: '30 MINUTES',
        isPopular:true,
        isOrganic: false,
        isSuperEasy: true,
        img: '/img/products/g1.jpg',
        attributes: {
            "By Season": ['autumn'],
            "By Dietary Preference": [],
            "By Meal": ['dinenr'],
            "Sweet Things": ['fruit-desserts','cakes-and-quick-breads']
        }
    },
    {
        title: 'Product15',
        estimated_time: '30 MINUTES',
        isPopular:false,
        isOrganic: true,
        isSuperEasy: true,
        img: '/img/products/g1.jpg',
        attributes: {
            "By Season": ['summer', 'spring'],
            "By Dietary Preference": ['egg-free'],
            "By Meal": ['dinner','snacks-and-appetizers'],
            "Sweet Things": ['cakes-and-quick-breads','chocolates']
        }
    },
    {
        title: 'Product16',
        estimated_time: '30 MINUTES',
        isPopular:false,
        isOrganic: false,
        isSuperEasy: true,
        img: '/img/products/g1.jpg',
        attributes: {
            "By Season": ['winter'],
            "By Dietary Preference": ['egg-free'],
            "By Meal": [],
            "Sweet Things": ['chocolates']
        }
    },
    {
        title: 'Product17',
        estimated_time: '30 MINUTES',
        isPopular:false,
        isOrganic: false,
        isSuperEasy: true,
        img: '/img/products/g1.jpg',
        attributes: {
            "By Season": ['summer', 'winter'],
            "By Dietary Preference": ['dairy-free'],
            "By Meal": ['holidays','snacks-and-appetizers'],
            "Sweet Things": ['fruit-desserts', 'cakes-and-quick-breads']
        }
    },
    {
        title: 'Product18',
        estimated_time: '30 MINUTES',
        isPopular:false,
        isOrganic: false,
        isSuperEasy: true,
        img: '/img/products/g1.jpg',
        attributes: {
            "By Season": ['autumn'],
            "By Dietary Preference": ['quick-and-easy'],
            "By Meal": ['holidays'],
            "Sweet Things": ['cakes-and-quick-breads', 'chocolates']
        }
    },
    {
        title: 'Product19',
        estimated_time: '30 MINUTES',
        isPopular:false,
        isOrganic: false,
        isSuperEasy: true,
        img: '/img/products/g1.jpg',
        attributes: {
            "By Season": ['autumn', 'spring'],
            "By Dietary Preference": ['quick-and-easy'],
            "By Meal": ['holidays', 'breakfast'],
            "Sweet Things": ['cakes-and-quick-breads']
        }
    },
    {
        title: 'Product20',
        estimated_time: '30 MINUTES',
        isPopular:false,
        isOrganic: false,
        isSuperEasy: true,
        img: '/img/products/g1.jpg',
        attributes: {
            "By Season": ['autumn'],
            "By Dietary Preference": ['healthy'],
            "By Meal": ['breakfast'],
            "Sweet Things": ['chocolates']
        }
    }
];
