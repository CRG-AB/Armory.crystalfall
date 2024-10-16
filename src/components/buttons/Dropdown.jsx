export const Dropdown = ({ Items, Title, activeItem, setActiveItem }) => {
  return (
    <div className="dropdown dropdown-hover dropdown-end">
      <div role="button" className="btn m-1">
        {Title}
      </div>
      <ul className="dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {Items.map((item, index) => {
          return (
            <li
              key={index}
              className={`p-2 transition-colors duration-200 rounded-lg hover:bg-gray-300 ${
                activeItem === item ? "bg-gray-700 text-white" : ""
              }`}
              onClick={() => setActiveItem(item)}
            >
              <a className="text-inherit">{item}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
