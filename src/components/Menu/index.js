import React from 'react'

// i18n
import { useTranslation } from 'react-i18next'

// styles
import { MenuStyled, MenuAvatar, MenuList, MenuItem } from './styles'

// icones
import { ReactComponent as Avatar } from '../../assets/icons/avatar.svg'
import { ReactComponent as Transfers } from '../../assets/icons/transfers.svg'
import { ReactComponent as Accounts } from '../../assets/icons/accounts.svg'
import { ReactComponent as Releases } from '../../assets/icons/releases.svg'
import { ReactComponent as Categories } from '../../assets/icons/categories.svg'
import { useState } from 'react'

export default ({ open, gridArea }) => {
  const { t } = useTranslation()

  const [menuActived, setMenuActived] = useState(1)

  return (
    < MenuStyled gridArea={gridArea} open={open} >
      <MenuAvatar menuOpened={open}>
        <Avatar />
        <div>
          <span>{t('menu.welcome')}</span>
          <span>Renan Frutuozo</span>
        </div>
      </MenuAvatar>
      <MenuList>
        <MenuItem
          actived={menuActived === 1 ? true : false}
          menuOpened={open}
          onClick={() => setMenuActived(1)}
          to='/Category'
        >
          <Categories />
          <span>{t('menu.menus.categories')}</span>
        </MenuItem>
        <MenuItem
          actived={menuActived === 2 ? true : false}
          menuOpened={open}
          onClick={() => setMenuActived(2)}
          to='/'
        >
          <Transfers />
          <span>{t('menu.menus.transfers')}</span>
        </MenuItem>
        <MenuItem
          actived={menuActived === 3}
          menuOpened={open}
          onClick={() => setMenuActived(3)}
          to='/'
        >
          <Accounts />
          <span>{t('menu.menus.accounts')}</span>
        </MenuItem>
        <MenuItem
          actived={menuActived === 4}
          menuOpened={open}
          onClick={() => setMenuActived(4)}
          to='/'
        >
          <Releases />
          <span>{t('menu.menus.transactions')}</span>
        </MenuItem>
      </MenuList>
    </MenuStyled >
  )
}