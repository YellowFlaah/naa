import React from 'react'
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
export default function Abouttable() {
  return (
    <div>
         <Table  className="font13 my-4">
      <Thead>
        <Tr className= "font40">
          <Th>Think</Th>
          <Th>Feel</Th>
          <Th>Unity</Th>
        
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>A <b> Hightech Humanitarian</b> believes in the use of logic and intelligence to build cross cultural bridges that strengthen the nation as well as reduce social conflict</Td>
          <Td>A <strong> Hightech Humanitarian</strong> believes that all human beings matter, we are all connected, and that we should all work together to ensure that no group is treated poorly</Td>
          <Td>A <strong> Hightech Humanitarian</strong> strongly believes that “Unity is Strength and Division is Weakness” and that we all, as the human race, should focus on social harmony, equality, and justice for everyone in the nation</Td>   
        </Tr>
      </Tbody>
    </Table>
    </div>
  )
}

