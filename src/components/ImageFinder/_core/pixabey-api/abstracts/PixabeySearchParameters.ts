export type PixabeySearchParameters = {
    q?: string;
    lang?:
        | 'cs'
        | 'da'
        | 'de'
        | 'en'
        | 'es'
        | 'fr'
        | 'id'
        | 'it'
        | 'hu'
        | 'nl'
        | 'no'
        | 'pl'
        | 'pt'
        | 'ro'
        | 'sk'
        | 'fi'
        | 'sv'
        | 'tr'
        | 'vi'
        | 'th'
        | 'bg'
        | 'ru'
        | 'el'
        | 'ja'
        | 'ko'
        | 'zh';
    id?: string;
    image_type?: 'all' | 'photo' | 'illustration' | 'vector';
    orientation?: 'all' | 'horizontal' | 'vertical';
    category?:
        | 'backgrounds'
        | 'fashion'
        | 'nature'
        | 'science'
        | 'education'
        | 'feelings'
        | 'health'
        | 'people'
        | 'religion'
        | 'places'
        | 'animals'
        | 'industry'
        | 'computer'
        | 'food'
        | 'sports'
        | 'transportation'
        | 'travel'
        | 'buildings'
        | 'business'
        | 'music';
    min_width?: string;
    min_height?: string;
    colors?:
        | 'grayscale'
        | 'transparent'
        | 'red'
        | 'orange'
        | 'yellow'
        | 'green'
        | 'turquoise'
        | 'blue'
        | 'lilac'
        | 'pink'
        | 'white'
        | 'gray'
        | 'black'
        | 'brown';
    editors_choice?: 'true' | 'false';
    safesearch?: 'true' | 'false';
    order?: 'popular' | 'latest';
    page?: string;
    per_page?: number; // 3..200
    callback?: string;
    pretty?: 'true' | 'false';
};
