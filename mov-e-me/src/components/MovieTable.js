import React from 'react'
import Movie from './Movie'

const MovieTable = () => {

  const TableCell = () => {
    return <Movie />
  }

  const tableRow = (nCells) => {
    const createItems = (nItems) => {
      const items = []

      for (let i = 0; i < nItems; i++) {
        items.push(i)
      }

      return items.map(item => {
        return TableCell()
      })
    }

    return (
      <tr>
        {createItems(nCells)}
      </tr>
    )
  }

  const createTable = (nRows, nCells) => {

    const createRows = (rows, cells) => {
      const items = []

      for (let i = 0; i < rows; i++) {
        items.push(i)
      }

      return items.map(item => {
        return tableRow(cells)
      })
    }

    return (
      <>
        {createRows(nRows, nCells)}
      </>
    )
  }

  return (
    <div>
      <table>
        <tbody>
          {createTable(2, 4)}
        </tbody>
      </table>
    </div>
  )
}

export default MovieTable