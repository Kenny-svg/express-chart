const Details = () => {
  return (
    <>
      <div className="border-t mt-4">
        <div className="flex justify-between text-left mt-5">
          <div>
            <p className="text-sm text-gray-500">Total this month</p>
            <p className="font-semibold text-2xl">$478.33</p>
          </div>
          <div className="text-right">
            <p className="font-bold">+2.4%</p>
            <p className="text-sm text-gray-500">from last month</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
