import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components/macro'

TagFilter.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string),
  onClick: PropTypes.func,
}

export default function TagFilter({ onClick, tags, selectedTag }) {
  return (
    <Grid>
      <ButtonStyled
        active={selectedTag === 'all'}
        onClick={() => onClick('all')}
      >
        all
      </ButtonStyled>
      {tags.map(tag => (
        <ButtonStyled
          active={selectedTag === tag}
          onClick={() => onClick(tag)}
          key={tag}
        >
          {tag}
        </ButtonStyled>
      ))}
    </Grid>
  )
}

const Grid = styled.section`
  overflow-y: scroll;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
  margin-top: 1px;
  display: grid;
  grid-auto-flow: column;
  gap: 1px;
  width: 100%;
`

function select(propName, first, second) {
  return props => (props[propName] ? first : second)
}

const ButtonStyled = styled.button`
  background: ${select('active', 'hotpink', '#444')};
  color: ${select('active', 'white', 'white')};
  border: none;
  scroll-snap-align: start;
`