import {
  ScrollView,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Formik} from 'formik';
import {useDispatch} from 'react-redux';
import * as Yup from 'yup';
import uuid from 'react-native-uuid';
import {createTasks} from '../redux/actions/taskAction';

const validationSchema = Yup.object().shape({
  title: Yup.string().required('*Required'),
});

const Task = ({navigation}) => {
  const dispatch = useDispatch();

  const createNewTask = (values) => {
    const payload = {...values, status : 'todo' , id : uuid.v4()}
    
    dispatch(createTasks(payload));
    navigation.goBack();
  };
  return (
    <ScrollView style={styles.body}>
      <View>
        <Text style={styles.title}> Task </Text>
      </View>
      <Formik
        initialValues={{title: '', description: ''}}
        validationSchema={validationSchema}
        onSubmit={values => createNewTask(values)}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <View>
            <Text style={styles.formik_text}>Title</Text>
            <TextInput
              onChangeText={handleChange('title')}
              onBlur={handleBlur('title')}
              value={values.title}
              placeholder="Title"
              placeholderTextColor={EStyleSheet.value('$ALPHA_TEXT')}
              style={styles.formik_title}></TextInput>
            {errors.title && touched.title ? (
              <Text style={styles.error}>{errors.title}</Text>
            ) : null}

            <Text style={styles.formik_text}>Description</Text>
            <TextInput
              onChangeText={handleChange('description')}
              onBlur={handleBlur('description')}
              value={values.description}
              multiline={true}
              numberOfLines={6}
              placeholder="Describe about task..."
              placeholderTextColor={EStyleSheet.value('$ALPHA_TEXT')}
              style={styles.formik_desc}></TextInput>
            {errors.description && touched.description ? (
              <Text style={styles.error}>{errors.description}</Text>
            ) : null}
            <View style={styles.btn_view}>
              <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.text}>Submit</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.goBack()}>
                <Text style={styles.text}>Back</Text>
              </TouchableOpacity>
            </View>
            {/* <TouchableOpacity onPress={handleSubmit}>
                <View style={styles.button}>
                  <Text style={styles.text}>SUBMIT</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <View style={styles.button}>
                  <Text style={styles.text}>BACK</Text>
                </View>
              </TouchableOpacity> */}
          </View>
        )}
      </Formik>
    </ScrollView>
  );
};

export default Task;

const styles = EStyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '$BACKGROUND',
  },
  title: {
    color: '$TEXT',
    fontWeight: 'bold',
    fontSize: 24,
    margin: 30,
    textAlign: 'center',
  },
  formik_text: {
    color: '$TEXT',
    fontSize: 18,
    marginHorizontal: 40,
  },
  formik_title: {
    marginHorizontal: 25,
    marginVertical: 15,
    backgroundColor: '$CARD_BACKGROUND',
    borderRadius: 10,
    padding: 15,
  },
  formik_desc: {
    marginHorizontal: 25,
    marginVertical: 15,
    backgroundColor: '$CARD_BACKGROUND',
    borderRadius: 10,
    paddingLeft: 15,
  },
  btn_view: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  button: {
    marginHorizontal: 45,
    borderRadius: 10,
    marginVertical: 30,
    backgroundColor: '$PRIMARY',
    paddingVertical: 10,
    padding: 20,
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    color: '$DARK',
  },
  error: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '$ERROR',
    textAlign: 'right',
  },
});
