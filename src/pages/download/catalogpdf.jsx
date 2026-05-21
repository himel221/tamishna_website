import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image, Font } from '@react-pdf/renderer';

// Register fonts (optional - for Bengali support if needed)
Font.register({
  family: 'Roboto',
  src: 'https://cdnjs.cloudflare.com/ajax/libs/roboto-fontface/0.10.0/fonts/Roboto/Roboto-Regular.ttf'
});

// Create styles
const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: 'Roboto',
    backgroundColor: '#ffffff'
  },
  header: {
    marginBottom: 20,
    borderBottom: 2,
    borderBottomColor: '#1B0088',
    paddingBottom: 10
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 10
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1B0088',
    textAlign: 'center',
    marginBottom: 10
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20
  },
  section: {
    marginBottom: 20
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1B0088',
    marginBottom: 10,
    backgroundColor: '#f0f0f0',
    padding: 8
  },
  productGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 15
  },
  productCard: {
    width: '48%',
    margin: '1%',
    padding: 10,
    border: 1,
    borderColor: '#ddd',
    borderRadius: 5
  },
  productName: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333'
  },
  productDescription: {
    fontSize: 10,
    color: '#666',
    marginBottom: 5
  },
  productSpecs: {
    fontSize: 9,
    color: '#888'
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 30,
    right: 30,
    textAlign: 'center',
    fontSize: 10,
    color: '#999',
    borderTop: 1,
    borderTopColor: '#ddd',
    paddingTop: 10
  },
  companyInfo: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#f5f5f5',
    borderRadius: 5
  },
  contactInfo: {
    fontSize: 10,
    color: '#555',
    textAlign: 'center',
    marginTop: 5
  }
});

const PDFCatalog = ({ data }) => (
  <Document>
    {/* Cover Page */}
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <Image src={data.logo} style={styles.logo} />
        <Text style={styles.title}>{data.companyName}</Text>
        <Text style={styles.subtitle}>{data.tagline}</Text>
      </View>
      
      <Text style={styles.sectionTitle}>Product Catalog {new Date().getFullYear()}</Text>
      
      <View style={styles.companyInfo}>
        <Text>Premium Sewing Thread Solutions</Text>
        <Text>A specialized unit of a diversified industrial group</Text>
      </View>
      
      <View style={styles.footer}>
        <Text>© {new Date().getFullYear()} {data.companyName}. All rights reserved.</Text>
      </View>
    </Page>

    {/* Products Page */}
    <Page size="A4" style={styles.page}>
      <Text style={styles.sectionTitle}>Our Products</Text>
      
      <View style={styles.productGrid}>
        {data.products.map((product, index) => (
          <View key={index} style={styles.productCard}>
            <Text style={styles.productName}>{product.name}</Text>
            <Text style={styles.productDescription}>{product.description}</Text>
            <Text style={styles.productSpecs}>Specifications: {product.specifications}</Text>
            <Text style={styles.productSpecs}>Applications: {product.applications}</Text>
          </View>
        ))}
      </View>

      {/* Company Information */}
      <View style={styles.companyInfo}>
        <Text style={{ fontWeight: 'bold', marginBottom: 5 }}>Contact Information</Text>
        <Text>{data.address}</Text>
        <Text>Phone: {data.phone}</Text>
        <Text>Email: {data.email}</Text>
        <Text>Website: {data.website}</Text>
      </View>
      
      <View style={styles.footer}>
        <Text>For more information, please contact us.</Text>
      </View>
    </Page>
  </Document>
);

export default PDFCatalog;