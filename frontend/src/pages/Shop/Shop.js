import React, { useState } from 'react'

import Product from '../../components/Product/index'

function FilterItem({ title, options }) {
  return (
    <div className="w-full">
      <h1 className="font-bold text-xl mb-2 mt-2">{title}</h1>
      {options.map((value, index) => {
        return (
          <div>
            <input
              id={value.value}
              type="checkbox"
              value={value.value}
              className="w-4 h-4 text-green-600 bg-gray-300 rounded focus:ring-green-500 "
            />
            <label htmlFor={value.value} className="ml-2">
              {value.title}
            </label>
          </div>
        )
      })}
    </div>
  )
}

function Filter({ data, ...props }) {
  return (
    <form {...props}>
      <h1 className="font-bold text-2xl mb-2">Filter</h1>
      <div className="grid grid-cols-3 justify-around lg:block">
        {data.map((value, index) => {
          return (
            <FilterItem
              key={index}
              title={value.title}
              options={value.options}
            />
          )
        })}
      </div>
    </form>
  )
}

function Shop() {
  const [filter, setFilter] = useState([
    {
      title: 'Deals',
      options: [
        {
          title: 'Best value from...',
          value: 'best value from',
        },
        {
          title: 'Members only...',
          value: 'members only',
        },
      ],
    },
    {
      title: 'Your budget',
      options: [
        {
          title: 'Less than $25',
          value: 'less than $25',
        },
        {
          title: '$150-$250',
          value: '$150-$250',
        },
        {
          title: '$250-$350',
          value: '$250-$350',
        },
        {
          title: 'Greater than...',
          value: 'greater than...',
        },
      ],
    },
    {
      title: 'Rating',
      options: [
        {
          title: '1 Star',
          value: '1 star',
        },
        {
          title: '2 Stars',
          value: '2 stars',
        },
        {
          title: '3 Stars',
          value: '3 stars',
        },
        {
          title: '4 Stars',
          value: '4 stars',
        },
        {
          title: '5 Stars',
          value: '5 stars',
        },
      ],
    },
  ])

  return (
    <div className="flex justify-center">
      <div className="container grid lg:grid-cols-[200px,auto] 2xl:grid-cols-[250px,auto]">
        <div className="box-border mx-2">
          <Filter data={filter} className="lg:sticky lg:top-32" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {[...Array(24)].map((e, i) => {
            return <Product />
          })}
        </div>
      </div>
    </div>
  )
}

export default Shop
