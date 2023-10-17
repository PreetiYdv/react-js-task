import React from 'react'

const Third = ({ myArray }) => {
  return (
    <>
      <table className="border-collapse border mb-5 border-black p-2">
        <th className="p-2 border border-black">Name</th>
        <th className="p-2 border border-black" colspan="2">
          Subject
        </th>
        {myArray.map((obj, i) => {
          return (
            <tr key={i}>
              <td className="p-2 border border-black">{obj.name}</td>
              {obj &&
                obj.sub.map((item, index) => {
                  return (
                    <td className="p-2 border border-black" key={index}>
                      {item}{" "}
                    </td>
                  );
                })}
            </tr>
          );
        })}
      </table>
    </>
  );
};

export default Third