const Fillter =()=>{
  return (<div className="mt-12 flex justify-between" >
  <div className="flex gap-8 flex-wrap">
  <select name="type" id="" className="py-4 px-4 rounded-2xl text-xl font-gray-100 text-xs font-medium bg-[#EDEDED]">
  <option>Types</option>
  <option>Phisical</option>
   <option>Digital</option>
  </select>
  <input type="text" name="min" placeholder="min place" className="text-xs pl-2 rounded-2xl w-24 h-12 ring-1" />
 <input type="text" name="max" placeholder="max place" className="text-xs pl-2 rounded-2xl w-24 ring-1"/>
    <select name="Size" id="" className="py-4 px-4 rounded-2xl text-xl font-gray-100 text-xs font-medium bg-[#EDEDED]">
  <option>Size</option>
  <option>M</option>
   <option>L</option>
  </select>
    <select name="colour" id="" className="py-4 px-4 rounded-2xl text-xl font-gray-100 text-xs font-medium bg-[#EDEDED]">
  <option>Colour</option>
  <option>Test</option>
  </select>
      <select name="category" id="" className="py-4 px-4 rounded-2xl text-xl font-gray-100 text-xs font-medium bg-[#EDEDED]">
  <option>Category</option>
  <option>New Arrival</option>
   <option>Popular</option>
  </select>
        <select name="all-filters" id="" className="py-4 px-4 rounded-2xl text-xl font-gray-100 text-xs font-medium bg-[#EDEDED]">
  <option>All Filters</option>
  </select>
  </div>
    <div className="">
    <select name="type" id="" className="py-4 px-4 rounded-2xl text-xl font-gray-100 text-xs font-medium bg-[#EDEDED]">
  <option>Sort By</option>
  <option>Heigh to Low</option>
   <option>Low to Heigh</option>
   <option>Newest</option>
  <option>Oldest</option>
  </select>
    </div>
  </div>)
}
export default Fillter;
