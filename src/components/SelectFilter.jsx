import React, { useState } from 'react'
import { searchFilterData } from './common/Helper'

const SelectFilter = () => {
    const [selectedValue, setSelectedValue] = useState('Palvi');
    const filteredData = searchFilterData.filter(obj => obj.title === selectedValue || selectedValue === 'All');
    console.log(searchFilterData.filter(obj => obj.title === selectedValue))
    return (
        <>
            <section>
                <div className="container py-12 mx-auto px-3">
                    <select name="data" id="data" className='w-[200px] border mb-12 py-1 px-3'
                        value={selectedValue}
                        onChange={(e) => setSelectedValue(e.target.value)}>
                        <option value="All">All</option>
                        <option value="Palvi">Palvi</option>
                        <option value="Muskan">Muskan</option>
                        <option value="Neha">Neha</option>
                    </select>
                    <div className='grid lg:grid-cols-4 grid-cols-3 gap-6'>
                        {filteredData.map((obj, i) => {
                            return (
                                <select name="team member" id="team" key={i} className='border'>
                                     <option value="" key="" selected disabled> {obj.title} </option>
                                    {obj.team.map((items, index) => {
                                        return (      
                                            <option value={items} key={index}> {items} </option>
                                        )
                                    })}
                                </select>
                            );
                        })}
                    </div>
                </div>
            </section >
        </>
    )
}

export default SelectFilter