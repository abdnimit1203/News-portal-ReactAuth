/* eslint-disable react/prop-types */


const Category = ({category}) => {
    return (
        <div className="px-3">
            <p className="text-lg text-[#9F9F9F]">{category.name}</p>
        </div>
    );
};

export default Category;