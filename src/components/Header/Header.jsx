const Header = () => {
  const date = new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return (
    <div className="flex flex-col justify-center items-center gap-2 py-10">
      <img src="/public/logo.png" alt="" />
      <p>Journalism Without Fear or Favour</p>
      <p className="font-semibold text-slate-500 text-xl">
        {date.toLocaleDateString(undefined, options)}
      </p>
    </div>
  );
};

export default Header;
