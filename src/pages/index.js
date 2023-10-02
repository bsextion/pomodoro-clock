import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import ModalMenu from '@/components/ModalMenu'
import "bootstrap/dist/css/bootstrap.min.css";
import Countdown from '@/components/Countdown'

export default function Home() {
  return (
    <>
    <ModalMenu>
      <Countdown></Countdown>
      </ModalMenu>
    </>
  )
}
