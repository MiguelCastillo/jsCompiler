//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by jni4net. See http://jni4net.sourceforge.net/ 
//     Runtime Version:2.0.50727.5456
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace com.google.javascript.jscomp {
    
    
    #region Component Designer generated code 
    [global::net.sf.jni4net.attributes.JavaClassAttribute()]
    public partial class CheckLevel : global::java.lang.Object {
        
        internal new static global::java.lang.Class staticClass;
        
        internal static global::net.sf.jni4net.jni.MethodId j4n_values0;
        
        internal static global::net.sf.jni4net.jni.MethodId j4n_valueOf1;
        
        internal static global::net.sf.jni4net.jni.FieldId j4n_ERROR2;
        
        internal static global::net.sf.jni4net.jni.FieldId j4n_WARNING3;
        
        internal static global::net.sf.jni4net.jni.FieldId j4n_OFF4;
        
        protected CheckLevel(global::net.sf.jni4net.jni.JNIEnv @__env) : 
                base(@__env) {
        }
        
        public static global::java.lang.Class _class {
            get {
                return global::com.google.javascript.jscomp.CheckLevel.staticClass;
            }
        }
        
        [global::net.sf.jni4net.attributes.JavaMethodAttribute("Lcom/google/javascript/jscomp/CheckLevel;")]
        public static global::com.google.javascript.jscomp.CheckLevel ERROR {
            get {
                global::net.sf.jni4net.jni.JNIEnv @__env = global::net.sf.jni4net.jni.JNIEnv.ThreadEnv;
            using(new global::net.sf.jni4net.jni.LocalFrame(@__env, 10)){
                return global::net.sf.jni4net.utils.Convertor.StrongJ2Cp<global::com.google.javascript.jscomp.CheckLevel>(@__env, @__env.GetStaticObjectFieldPtr(global::com.google.javascript.jscomp.CheckLevel.staticClass, global::com.google.javascript.jscomp.CheckLevel.j4n_ERROR2));
            }
            }
        }
        
        [global::net.sf.jni4net.attributes.JavaMethodAttribute("Lcom/google/javascript/jscomp/CheckLevel;")]
        public static global::com.google.javascript.jscomp.CheckLevel WARNING {
            get {
                global::net.sf.jni4net.jni.JNIEnv @__env = global::net.sf.jni4net.jni.JNIEnv.ThreadEnv;
            using(new global::net.sf.jni4net.jni.LocalFrame(@__env, 10)){
                return global::net.sf.jni4net.utils.Convertor.StrongJ2Cp<global::com.google.javascript.jscomp.CheckLevel>(@__env, @__env.GetStaticObjectFieldPtr(global::com.google.javascript.jscomp.CheckLevel.staticClass, global::com.google.javascript.jscomp.CheckLevel.j4n_WARNING3));
            }
            }
        }
        
        [global::net.sf.jni4net.attributes.JavaMethodAttribute("Lcom/google/javascript/jscomp/CheckLevel;")]
        public static global::com.google.javascript.jscomp.CheckLevel OFF {
            get {
                global::net.sf.jni4net.jni.JNIEnv @__env = global::net.sf.jni4net.jni.JNIEnv.ThreadEnv;
            using(new global::net.sf.jni4net.jni.LocalFrame(@__env, 10)){
                return global::net.sf.jni4net.utils.Convertor.StrongJ2Cp<global::com.google.javascript.jscomp.CheckLevel>(@__env, @__env.GetStaticObjectFieldPtr(global::com.google.javascript.jscomp.CheckLevel.staticClass, global::com.google.javascript.jscomp.CheckLevel.j4n_OFF4));
            }
            }
        }
        
        private static void InitJNI(global::net.sf.jni4net.jni.JNIEnv @__env, java.lang.Class @__class) {
            global::com.google.javascript.jscomp.CheckLevel.staticClass = @__class;
            global::com.google.javascript.jscomp.CheckLevel.j4n_values0 = @__env.GetStaticMethodID(global::com.google.javascript.jscomp.CheckLevel.staticClass, "values", "()[Lcom/google/javascript/jscomp/CheckLevel;");
            global::com.google.javascript.jscomp.CheckLevel.j4n_valueOf1 = @__env.GetStaticMethodID(global::com.google.javascript.jscomp.CheckLevel.staticClass, "valueOf", "(Ljava/lang/String;)Lcom/google/javascript/jscomp/CheckLevel;");
            global::com.google.javascript.jscomp.CheckLevel.j4n_ERROR2 = @__env.GetStaticFieldID(global::com.google.javascript.jscomp.CheckLevel.staticClass, "ERROR", "Lcom/google/javascript/jscomp/CheckLevel;");
            global::com.google.javascript.jscomp.CheckLevel.j4n_WARNING3 = @__env.GetStaticFieldID(global::com.google.javascript.jscomp.CheckLevel.staticClass, "WARNING", "Lcom/google/javascript/jscomp/CheckLevel;");
            global::com.google.javascript.jscomp.CheckLevel.j4n_OFF4 = @__env.GetStaticFieldID(global::com.google.javascript.jscomp.CheckLevel.staticClass, "OFF", "Lcom/google/javascript/jscomp/CheckLevel;");
        }
        
        [global::net.sf.jni4net.attributes.JavaMethodAttribute("()[Lcom/google/javascript/jscomp/CheckLevel;")]
        public static com.google.javascript.jscomp.CheckLevel[] values() {
            global::net.sf.jni4net.jni.JNIEnv @__env = global::net.sf.jni4net.jni.JNIEnv.ThreadEnv;
            using(new global::net.sf.jni4net.jni.LocalFrame(@__env, 10)){
            return global::net.sf.jni4net.utils.Convertor.ArrayStrongJ2Cp<com.google.javascript.jscomp.CheckLevel[], global::com.google.javascript.jscomp.CheckLevel>(@__env, @__env.CallStaticObjectMethodPtr(global::com.google.javascript.jscomp.CheckLevel.staticClass, global::com.google.javascript.jscomp.CheckLevel.j4n_values0));
            }
        }
        
        [global::net.sf.jni4net.attributes.JavaMethodAttribute("(Ljava/lang/String;)Lcom/google/javascript/jscomp/CheckLevel;")]
        public static global::com.google.javascript.jscomp.CheckLevel valueOf(global::java.lang.String par0) {
            global::net.sf.jni4net.jni.JNIEnv @__env = global::net.sf.jni4net.jni.JNIEnv.ThreadEnv;
            using(new global::net.sf.jni4net.jni.LocalFrame(@__env, 12)){
            return global::net.sf.jni4net.utils.Convertor.StrongJ2Cp<global::com.google.javascript.jscomp.CheckLevel>(@__env, @__env.CallStaticObjectMethodPtr(global::com.google.javascript.jscomp.CheckLevel.staticClass, global::com.google.javascript.jscomp.CheckLevel.j4n_valueOf1, global::net.sf.jni4net.utils.Convertor.ParStrongCp2J(par0)));
            }
        }
        
        new internal sealed class ContructionHelper : global::net.sf.jni4net.utils.IConstructionHelper {
            
            public global::net.sf.jni4net.jni.IJvmProxy CreateProxy(global::net.sf.jni4net.jni.JNIEnv @__env) {
                return new global::com.google.javascript.jscomp.CheckLevel(@__env);
            }
        }
    }
    #endregion
}
