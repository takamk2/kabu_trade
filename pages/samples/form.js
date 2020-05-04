import React from 'react'
import Welcome from '../../components/welcome'
import Comment from '../../components/comment'
import Tick from '../../components/tick'
import Toggle from '../../components/toggle'
import LoginControl from '../../components/login-control'
import Mailbox from '../../components/mailbox'
import Page from '../../components/page'
import NumberList from '../../components/number-list'
import NameForm from '../../components/name-form'
import EssayForm from '../../components/essay-form'
import FlavorForm from '../../components/flavor-form'
import Reservation from '../../components/reservation'
import Calculator from '../../components/calculator'
import WelcomeDialog from '../../components/welcome-dialog'

export default function Form() {
  const messages = ['React', 'Re: React', 'Re:Re: React']
  const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
      name: 'Hello Kitty',
      avatarUrl: 'https://placekitten.com/g/64/64',
    },
  }
  return (
    <>
      <WelcomeDialog />
      <Calculator />
      <Reservation />
      <FlavorForm />
      <EssayForm />
      <NameForm />
      <NumberList numbers={[1, 2, 3, 4, 5]} />
      <Page />
      <Mailbox unreadMessages={messages} />
      <LoginControl />
      <Toggle />
      <Tick />
      <Welcome name="Taka" />
      <Comment date={comment.date} text={comment.text} author={comment.author} />
    </>
  )
}
