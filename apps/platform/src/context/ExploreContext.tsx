import { createContext, FC, PropsWithChildren, useContext, useState } from "react";

interface CategoryItem {
    title: string;
    checked: boolean;
    count: number;
    isLegend?: boolean;
}
  
const _cateogries:CategoryItem[] = [
    {
      title: 'All',
      checked: true,
      count: 0,
      isLegend: true
    },
    {
      title: 'Top',
      checked: true,
      count: 0,
    },
    {
      title: 'Art',
      checked: true,
      count: 0,
    },
    {
      title: 'Collectibles',
      checked: true,
      count: 0,
    },
    {
      title: 'Domain Names',
      checked: true,
      count: 0,
    },
    {
      title: 'Music',
      checked: true,
      count: 0,
    },
    {
      title: 'Photography',
      checked: true,
      count: 0,
    },
    {
      title: 'Sports',
      checked: true,
      count: 0,
    },
    {
      title: 'Trading Cards',
      checked: true,
      count: 0,
    },
    {
      title: 'Utility',
      checked: true,
      count: 0,
    },
    {
      title: 'Virtual Worlds',
      checked: true,
      count: 0,
    },
];

interface IExporeContext {
    category: CategoryItem[],
    toggleCategory: (index: number) => void
}

const ExploreContext = createContext<IExporeContext>({
    category: _cateogries,
    toggleCategory: () => {}
});

export const ExploreProvider:FC<PropsWithChildren<{}>> = ({ children }) => {
    const [category, setCategory] = useState<CategoryItem[]>(_cateogries);

    const toggleCategory = (index: number) => {
        let _category = [...category];
        
        if (!index) {
          _category[index].checked = !_category[index].checked;
          _category.map(item => {
            item.checked = _category[index].checked;
          });
        }

        else {
          let count = 0;
          if (_category[0].checked) {
            _category[index].checked = true;
            _category.map((item, idx) => {
              if (idx != index) item.checked = false;
            });
          }
          else {
            _category[index].checked = !_category[index].checked;
          }
          for (let i = 1; i < _category.length; i ++) if (_category[i].checked) count ++;
          _category[0].checked = count == category.length - 1 ? true : false;
        }
        setCategory(_category);
    }

    return (
        <ExploreContext.Provider
            value={{
                category,
                toggleCategory
            }}
        >
            {children}
        </ExploreContext.Provider>
    )
}

export const useExplore = () => {
    const context = useContext(ExploreContext);
    if (!context) {
        throw new Error("useExplore hook must be used inside ExploreProvider");
      }
    
      return context;
}