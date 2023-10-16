import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const ResumeFile = () => {
  return (
    <Document style={styles.body}>
      <Page dpi={300}>
        <Text style={styles.header}>Jakai Xu</Text>
        <Text style={styles.title}>Personal Summary</Text>
        <Text style={styles.paragraph}>
          Passionate and self-motivated Front-end Developer looking for an
          opportunity to develop exciting web development projects. Proactive
          and self-problem solving are the work beliefs who believes
          results-oriented thinking method is an essential requirement for a web
          developer. Excellent troubleshooting skills in a challenging and
          innovative environment. Stay eager, stay learning, stay curious, stay
          growing is my motto.
        </Text>
        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
        />
      </Page>
    </Document>
  );
};
export default ResumeFile;

const styles = StyleSheet.create({
  body: {
    backgroundColor: "white",
    width: "1280px",
    height: "max-content",
    padding: "60px",
  },
  header: { textAlign: "center", fontWeight: "bold", fontSize: "32px" },
  title: { fontWeight: "bold", fontSize: "20px" },
  paragraph: {
    paddingHorizontal: "50px",
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
