import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
const ResumeFile = () => {
  return (
    
    <Document style={styles.body}>
      <View>
        <Page dpi={150}>
          <Text style={styles.header}>Jakai Xu</Text>
          <Text style={styles.title}>Personal Summary</Text>
          <Text style={styles.paragraph}>
            Passionate and self-motivated DevOps engineer looking for an
            opportunity to develop exciting web development projects. Proactive
            and self-problem solving are the work beliefs who believes
            results-oriented thinking method is an essential requirement for a
            web develop team. Excellent troubleshooting skills in a challenging and
            innovative environment.
          </Text>
          <Text style={styles.paragraph}>
            If you are interested with me, you are always the most welcome to
            contact me with jakaixu@gmai.com.
          </Text>
          <Text
            style={styles.pageNumber}
            render={({ pageNumber, totalPages }) =>
              `${pageNumber} / ${totalPages}`
            }
          />
        </Page>
      </View>
    </Document>
  );
};
export default ResumeFile;

const styles = StyleSheet.create({
  body: {
    backgroundColor: "white",
    width: "960px",
    height: "max-content",
    padding: "60px",
  },
  header: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: "32px",
    marginTop: "30px",
  },
  title: {
    fontWeight: "bold",
    fontSize: "20px",
    padding: "40px",
  },
  paragraph: {
    paddingHorizontal: "50px",
    padding: "40px",
  },
  pageNumber: {
    position: "absolute",
    fontSize: 14,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
});
