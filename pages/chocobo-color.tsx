import React from 'react'
import Page from '../src/Page'
import FruitIcon from '../src/chocobo-color/FruitIcon'
import { Fruit } from '../src/chocobo-color/ffxiv-chocobo-color'
import { useTranslation } from '../src/i18n'

const ChocoboColor = () => {
  const { t } = useTranslation('chocobo-color')

  return (
    <Page
      title={t('title')}
      description='Calculator for changing your chocobo’s color.'
    >
      <FruitIcon fruit={Fruit.XelphatolApple} />
      <FruitIcon fruit={Fruit.MamookPear} />
      <FruitIcon fruit={Fruit.OGhomoroBerries} />
      <FruitIcon fruit={Fruit.DomanPlum} />
      <FruitIcon fruit={Fruit.Valfruit} />
      <FruitIcon fruit={Fruit.CieldalaesPineapple} />
    </Page>
  )
}

ChocoboColor.getInitialProps = async () => ({
  namespacesRequired: ['common', 'chocobo-color']
})

export default ChocoboColor
