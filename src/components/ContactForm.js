import { Button, Container, FormControl, FormErrorMessage, FormLabel, Heading, Input, Textarea, Text, useToast, Radio, RadioGroup, Stack } from "@chakra-ui/react";
import { useState } from "react";
import { sendContactForm } from "../../lib/api";
import styles from './ContactForm.module.css';

const initValues = {name:"",
phoneNumber: "",
address: "",
contactTime: "",
method: "",
email:"",
message:"",}

const initState = {values:initValues}

export default function ContactForm(){

const toast = useToast()
const [state,setState] = useState(initState)
const [touched, setTouched] = useState({});

const {values, isLoading, error} = state;

const onBlur = ({target}) => setTouched((prev) => ({...prev,[target.name]:true}))

const handleChange = ({target}) => setState((prev) => ({
    ...prev,
    values:{
        ...prev.values,
        [target.name]: target.value}}));

// const handleRadio = (value) => setState((prev) => ({
//     ...prev,
//     values: {
//       ...prev.values,
//       contactTime: value}})); 
// This was causing an infinite loop in the server, restarting itself. Since the way we are destructering the target, and not doing that to value. 

const onSubmit = async () => {
    setState((prev) => ({
        ...prev,
       isLoading:true,
    }));

    try {
        await sendContactForm(values);
        setTouched({});
        setState(initState);
        toast({
            title: "Message sent.",
            status: "success",
            duration: 2000,
            position: "top",
        });
        
    } catch (error) {
        setState((prev) => ({
            ...prev,
           isLoading:false,
           error: error.message,
        }));
    }
};

    return (
        <Container className={styles.containerSection}>
            <Heading className={styles.heading} mb={10}>Contact</Heading>

            {error && (
            <Text color = "red.300" my={4} fontSize="xl">{error}</Text>
            )}

            <FormControl className={styles.formControl} isRequired isInvalid={touched.name && !values.name} mb={5}>
                <FormLabel>Name</FormLabel>
                    <Input 
                        className={styles.input}
                        type="text" 
                        name="name" 
                        errorBorderColor="red.300"
                        value={values.name} 
                        onChange={handleChange}
                        onBlur={onBlur}/>
                <FormErrorMessage>Required</FormErrorMessage>
            </FormControl>

            <FormControl className={styles.formControl} isRequired isInvalid={touched.phoneNumber && !values.phoneNumber} mb={5}>
                <FormLabel>Phone number</FormLabel>
                    <Input 
                        className={styles.input}
                        type="text" 
                        name="phoneNumber" 
                        errorBorderColor="red.300"
                        value={values.phoneNumber} 
                        onChange={handleChange}
                        onBlur={onBlur}/>
                <FormErrorMessage>Required</FormErrorMessage>
            </FormControl>
            <FormControl className={styles.formControl} isRequired isInvalid={touched.address && !values.address} mb={5}>
                <FormLabel>Address</FormLabel>
                    <Input 
                        className={styles.input}
                        type="text" 
                        name="address" 
                        errorBorderColor="red.300"
                        value={values.address} 
                        onChange={handleChange}
                        onBlur={onBlur}/>
                <FormErrorMessage>Required</FormErrorMessage>
            </FormControl>

            <FormControl className={styles.formControl} isRequired isInvalid={touched.contactTime && !values.contactTime} mb={5}>
                <FormLabel>What is the best time to reach you?</FormLabel>
                    <Input 
                        className={styles.input}
                        type="text" 
                        name="contactTime" 
                        errorBorderColor="red.300"
                        value={values.contactTime}
                        onChange={handleChange}
                        onBlur={onBlur}/> 
                    {/* <RadioGroup onChange={handleRadio} name="contactTime" errorBorderColor="red.300">
                        <Stack direction="row">
                            <Radio value="morning" checked={values.contactTime === 'morning'}>Morning</Radio>
                            <Radio value="afternoon" checked={values.contactTime === 'afternoon'}>Afternoon</Radio>
                            <Radio value="evening" checked={values.contactTime === 'evening'}>Evening</Radio>
                        </Stack>
                    </RadioGroup> */}
                <FormErrorMessage>Required</FormErrorMessage>
            </FormControl> 

            <FormControl className={styles.formControl} isRequired isInvalid={touched.method && !values.method} mb={5}>
                <FormLabel>What is your preferred way of contact?</FormLabel>
                <Input 
                        className={styles.input}
                        type="text" 
                        name="method" 
                        errorBorderColor="red.300"
                        value={values.method} 
                        onChange={handleChange}
                        onBlur={onBlur}/>
                    {/* <RadioGroup onChange={handleRadio} name="method" errorBorderColor="red.300">
                        <Stack direction="row">
                            <Radio value="Call" checked={values.method === 'Call'}>Call</Radio>
                            <Radio value="Text" checked={values.method === 'Text'}>Text</Radio>
                            <Radio value="Email" checked={values.method === 'Email'}>Email</Radio>
                        </Stack>
                    </RadioGroup> */}
                <FormErrorMessage>Required</FormErrorMessage>
            </FormControl>

            <FormControl className={styles.formControl} isRequired isInvalid={touched.email && !values.email} mb={5}>
                <FormLabel>Email</FormLabel>
                    <Input 
                        className={styles.input}
                        type="email" 
                        name="email" 
                        errorBorderColor="red.300"
                        value={values.email} 
                        onChange={handleChange}
                        onBlur={onBlur}/>
                <FormErrorMessage>Required</FormErrorMessage>
            </FormControl>

            <FormControl className={styles.formControl} isRequired isInvalid={touched.message && !values.message} mb={5}>
                <FormLabel>Please describe what you would like.</FormLabel>
                    <Textarea 
                        className={styles.textarea}
                        type="text" 
                        name="message"
                        rows={4}
                        errorBorderColor="red.300" 
                        value={values.message} 
                        onChange={handleChange}
                        onBlur={onBlur}/>
                <FormErrorMessage>Required</FormErrorMessage>
            </FormControl>

            <Button
                className={styles.button}
                variant="outline"
                colorScheme="blue"
                isLoading={isLoading}
                disabled={!values.name || !values.phoneNumber || !values.address || !values.contactTime || !values.method || !values.email || !values.message}
                onClick={onSubmit}
            > Submit </Button>
        </Container>
    );
}