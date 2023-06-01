export interface PartsCategory {
  id: number;
  name: string;
  rakuten_category_id: number;
  hasAddButton: boolean;
  description: string;
}

export interface ComputerParts {
  id: number;
  category: PartsCategory;
  name: string;
  price: number;
  description: string;
  image: URL;
  rakuten_url: string;
  release_date: string;
}

export const PartsCategoryList: PartsCategory[] = [
  {
    id: 1,
    name: "CPU",
    rakuten_category_id: 211582,
    hasAddButton: false,
    description: "CPUの説明",
  },
  {
    id: 2,
    name: "マザーボード",
    rakuten_category_id: 211607,
    hasAddButton: false,
    description: "マザーボードの説明",
  },
  {
    id: 3,
    name: "メモリ",
    rakuten_category_id: 100089,
    hasAddButton: true,
    description: "メモリの説明",
  },
  {
    id: 4,
    name: "グラフィックボード",
    rakuten_category_id: 100081,
    hasAddButton: false,
    description: "グラフィックボードの説明",
  },
  {
    id: 5,
    name: "SSD",
    rakuten_category_id: 560079,
    hasAddButton: true,
    description: "SSDの説明",
  },
  {
    id: 6,
    name: "HDD",
    rakuten_category_id: 408516,
    hasAddButton: true,
    description: "HDDの説明",
  },
  {
    id: 7,
    name: "電源",
    rakuten_category_id: 565175,
    hasAddButton: false,
    description: "電源の説明",
  },
  {
    id: 8,
    name: "ケース",
    rakuten_category_id: 211592,
    hasAddButton: false,
    description: "ケースの説明",
  },
  {
    id: 9,
    name: "CPUクーラー",
    rakuten_category_id: 408527,
    hasAddButton: false,
    description: "CPUクーラーの説明",
  },
  {
    id: 10,
    name: "ケースファン",
    rakuten_category_id: 567182,
    hasAddButton: true,
    description: "ケースファンの説明",
  },
];