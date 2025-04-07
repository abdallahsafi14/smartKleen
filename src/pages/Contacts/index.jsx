import AppTemplate from "../../components/app-template";
import { useFormik } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import { Styles } from "./Styles";
import { motion } from "framer-motion";

const Contacts = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: ""
    },
    validationSchema: Yup.object({
      name: Yup.string().max(50, "Must be 50 characters or less").required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      message: Yup.string().min(10, "Message must be at least 10 characters").required("Required")
    }),
    onSubmit: (values, { resetForm }) => {
      console.log("Form submitted:", values);
      resetForm();
    }
  });

  return (
    <AppTemplate pageTitle="Contacts" navbar={true} footer={true} SEOPageName="Contacts">
      <Styles>
        <ContactsWrapper>
          <motion.div
            className="contacts-header"
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2>Contact Us</h2>
            <p>Have questions? Get in touch with our team.</p>
          </motion.div>

          <FormContainer
            as={motion.div}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <Form onSubmit={formik.handleSubmit}>
              <FormGroup
                as={motion.div}
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                  $error={formik.touched.name && formik.errors.name}
                />
                {formik.touched.name && formik.errors.name ? (
                  <ErrorMessage>{formik.errors.name}</ErrorMessage>
                ) : null}
              </FormGroup>

              <FormGroup
                as={motion.div}
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your.email@example.com"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  $error={formik.touched.email && formik.errors.email}
                />
                {formik.touched.email && formik.errors.email ? (
                  <ErrorMessage>{formik.errors.email}</ErrorMessage>
                ) : null}
              </FormGroup>

              <FormGroup
                as={motion.div}
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Label htmlFor="message">Message</Label>
                <TextArea
                  id="message"
                  name="message"
                  placeholder="Your message..."
                  rows="5"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.message}
                  $error={formik.touched.message && formik.errors.message}
                />
                {formik.touched.message && formik.errors.message ? (
                  <ErrorMessage>{formik.errors.message}</ErrorMessage>
                ) : null}
              </FormGroup>

              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <SubmitButton type="submit" disabled={formik.isSubmitting}>
                  Send Message
                </SubmitButton>
              </motion.div>
            </Form>
          </FormContainer>
        </ContactsWrapper>
      </Styles>
    </AppTemplate>
  );
};

const ContactsWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const FormContainer = styled.div`
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-size: 0.9rem;
  font-weight: 500;
  color: #2c3e50;
`;

const Input = styled.input`
  padding: 0.75rem 1rem;
  border: 1px solid ${props => (props.$error ? "#e74c3c" : "#ddd")};
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #3498db;
    box-shadow: 0 0 0 2px rgba(52, 152, 219, 0.2);
  }
`;

const TextArea = styled.textarea`
  padding: 0.75rem 1rem;
  border: 1px solid ${props => (props.$error ? "#e74c3c" : "#ddd")};
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: #3498db;
    box-shadow: 0 0 0 2px rgba(52, 152, 219, 0.2);
  }
`;

const ErrorMessage = styled.div`
  color: #e74c3c;
  font-size: 0.8rem;
  margin-top: 0.25rem;
`;

const SubmitButton = styled.button`
  background: #3498db;
  color: white;
  border: 2px solid #3498db;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 500;
  border-radius: 8px;

  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: transparent;
    color: #3498db;
  }

  &:disabled {
    background: #bdc3c7;
    cursor: not-allowed;
  }
`;

export default Contacts;
