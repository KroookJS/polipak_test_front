import React from "react";

type SortItem = {
  name: string;
  filterSort: string;
};

type PopupClick = MouseEvent & {
  path: Node[];
};

type SortPopupProps = {
  setItemsSort?: any;
};

export const sortList: SortItem[] = [
  { name: "все", filterSort: "" },
  { name: "незавершенные", filterSort: "?ordering=is_finished" },
  { name: "завершенные", filterSort: "?ordering=-is_finished" },
];

export const Sort: React.FC<SortPopupProps> = React.memo(({ setItemsSort }) => {
  const sortRef = React.useRef<HTMLDivElement>(null);
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("Все");

  const onClickListItem = (obj: SortItem) => {
    setItemsSort(obj.filterSort);
    setValue(obj.name);
    setOpen(false);
  };

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const _event = event as PopupClick;

      if (sortRef.current && !_event.path.includes(sortRef.current)) {
        setOpen(false);
      }
    };

    document.body.addEventListener("click", handleClickOutside);

    return () => document.body.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div ref={sortRef} className="sort">
      <div className="sort__label">
        <b>Сортировать:</b>
        <span onClick={() => setOpen(!open)}> {value}</span>
      </div>
      {open && (
        <div className="sort__popup">
          <ul>
            {sortList.map((obj, i) => (
              <li
                key={i}
                onClick={() => onClickListItem(obj)}
                className="active"
              >
                {obj.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
});
