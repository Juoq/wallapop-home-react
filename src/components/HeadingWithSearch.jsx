// import React from 'react'
import styled from 'styled-components'
import { TitleH1 } from '../ui/Title'

const SearchInput = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 21px;
  background-color: transparent;
  border: 1px solid #90a4ae;
  position: relative;
  color: #253238;
  padding: 0 32px 0 44px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  transition: all 0.1s linear;
  font-size: 16px;

  &:hover {
    border: 2px solid #253238;
    padding-left: 43px;
  }

  &:focus {
    border: 2px solid #253238;
    padding-left: 43px;
  }

  &:focus-visible {
    outline: none;
  }
`

const ButtonSearch = styled.button`
  // display: none;

  @media (min-width: 768px) {
    display: contents;
  }
`

const SearchIcon = styled.svg`
  left: 20px;
  width: 28px;
  height: 28px;
  z-index: 1;
  transition: all 0.15s linear;
  position: absolute;
  top: 22%;
  transform: translateY(-50%);

  & path {
    fill: #90a4ae;
  }
`

const HeadingWithSearch = () => {
  return (
    <div>
      <TitleH1>
        <strong>Compra y vende cosas de segunda mano</strong>
        <span>casi, casi, sin moverte del sofá</span>
      </TitleH1>
      <form onSubmit={(e) => console.log(e.target.values)}>
        <div className="search-wrapper">
          <SearchInput type="text" placeholder="Buscar en todas las categorías" />
          <SearchIcon
            className="Search__icon"
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeWidth="4"
              d="M31.263 32.547a1.975 1.975 0 0 1 2.717 0l4.454 4.284a1.81 1.81 0 0 1 0 2.627 1.975 1.975 0 0 1-2.717 0l-4.454-4.283a1.81 1.81 0 0 1 0-2.628zm-.46-2.569c-4.988 4.797-13.072 4.797-18.06 0-4.99-4.8-4.99-12.581 0-17.38 4.988-4.797 13.072-4.797 18.06 0 4.99 4.799 4.99 12.58 0 17.38zm-2.297-2.21c3.722-3.578 3.722-9.382 0-12.961-3.72-3.577-9.747-3.577-13.466 0-3.722 3.579-3.722 9.383 0 12.962 3.72 3.576 9.747 3.576 13.466 0z"
            ></path>
          </SearchIcon>
        </div>
        <ButtonSearch type="submit">Buscar</ButtonSearch>
      </form>
    </div>
  )
}

export default HeadingWithSearch
