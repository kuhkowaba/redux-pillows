import React from 'react'
import { connect } from 'react-redux'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'

import { toggleHidden } from '../../redux/cart/cart.actions'
import { createStructuredSelector } from 'reselect';
import { selectCartItemsCount, selectIsHidden } from '../../redux/cart/cart.selectors';

import * as S from './cart-icon.styles'

const CartIcon = ({ itemsCount, isHidden, toggleHidden }) => {
 return (
  <S.CartContainer>

    <S.CartIconContainer onClick={toggleHidden}>
      <S.Counter>{itemsCount}</S.Counter>
      <S.CartIcon />
    </S.CartIconContainer>

    { isHidden ? null : <CartDropdown /> }

  </S.CartContainer>
 )
}

// const mapStateToProps = state => ({
//   itemsCount: selectCartItemsCount(state),
//   isHidden: selectIsHidden(state)
// })

const mapStateToProps = createStructuredSelector({
  itemsCount: selectCartItemsCount,
  isHidden: selectIsHidden
})

const mapDispatchToProps = dispatch => ({
  toggleHidden: () => dispatch(toggleHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);