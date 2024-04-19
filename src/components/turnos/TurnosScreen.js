import React, { useEffect } from 'react';
import {
    Document,
    Font,
    Page,
    Text,
    Image,
    StyleSheet,
    PDFViewer
  } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    fontFamily: 'Oswald',
  },
  author: {
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 40,
  },
  subtitle: {
    fontSize: 18,
    margin: 12,
    fontFamily: 'Oswald',
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: 'justify',
    fontFamily: 'Times-Roman',
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: 'center',
    color: 'grey',
  },
  pageNumber: {
    position: 'absolute',
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: 'center',
    color: 'grey',
  },
});

Font.register({
  family: 'Oswald',
  src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf',
});

const Subtitle = ({ children, ...props }) => (
  <Text style={styles.subtitle} {...props}>
    {children}
  </Text>
);

export const TurnosScreen = () => {

    const imprimirTurnos = () => {

        let turnos = 0
        const arr = []

        for ( let index = 1; index <= 10; index ++ ) {
            turnos = index;
            // return turnos
            arr.push(turnos);
            
        }
        return arr
    }
  
    
  return (
    <PDFViewer>

    <Document>
    <Page style={styles.body} wrap>
      <Text style={styles.header} fixed>
        ~ Created with react-pdf ~
      </Text>
      <Text style={styles.title}>Don Quijote de la Mancha</Text>
      <Text style={styles.author}>Miguel de Cervantes</Text>
      <Image
        style={styles.image}
        src="http://static.donquijote.org/images/blogs/dq-reg/don-quijote-de-la-mancha.jpg"
      />
      <Subtitle>
        Capítulo I: Que trata de la condición y ejercicio del famoso hidalgo D.
        Quijote de la Mancha
      </Subtitle>
      <Text style={styles.text}>
        {
           imprimirTurnos().map( (turno) => 
            turno
           )
        }
      </Text>
      
      <Text
        style={styles.pageNumber}
        render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`}
        fixed
      />
    </Page>
  </Document>
    </PDFViewer>
  )
}
