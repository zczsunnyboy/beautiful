import _ from './velidate'
import VeeValidate, {Validator} from 'vee-validate'

const EnterDefalt = (name, content) => {
  let obj = {
    zh_CN: {
      messages: {
        [name]: () => content
      }
    }
  };

  Validator.updateDictionary(obj)
};

const EnterRule = (name, content, rule, length) => {
  Validator.extend(name, {
    messages: {
      zh_CN: field => content
    },
    validate: value => {
      if (length) {
        return value.length === parseInt(length) && rule.test(value)
      } else {
        return _rule.test(value)
      }
    }
  });
};

export default{
  EnterDefalt,
  EnterRule
}
