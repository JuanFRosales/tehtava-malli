interface MenuData {
    daily: Course[];
    weekly: Course[];
    courses: Course[]
  }

  interface Course {
    name: string;
    price: string;
    diets: string[];
  }

  interface MenuDay {
    date: string;
    courses: Course[];
  }

  interface WeeklyMenuData  extends MenuData{
    id: string;
    lang: string;
    days: MenuDay[];
  }
export type { Course, MenuData, WeeklyMenuData };
