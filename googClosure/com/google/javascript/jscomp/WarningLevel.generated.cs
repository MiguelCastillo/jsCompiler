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
    public partial class WarningLevel : global::java.lang.Object {
        
        internal new static global::java.lang.Class staticClass;
        
        internal static global::net.sf.jni4net.jni.MethodId j4n_values0;
        
        internal static global::net.sf.jni4net.jni.MethodId j4n_valueOf1;
        
        internal static global::net.sf.jni4net.jni.MethodId j4n_setOptionsForWarningLevel2;
        
        internal static global::net.sf.jni4net.jni.FieldId j4n_QUIET3;
        
        internal static global::net.sf.jni4net.jni.FieldId j4n_DEFAULT4;
        
        internal static global::net.sf.jni4net.jni.FieldId j4n_VERBOSE5;
        
        protected WarningLevel(global::net.sf.jni4net.jni.JNIEnv @__env) : 
                base(@__env) {
        }
        
        public static global::java.lang.Class _class {
            get {
                return global::com.google.javascript.jscomp.WarningLevel.staticClass;
            }
        }
        
        [global::net.sf.jni4net.attributes.JavaMethodAttribute("Lcom/google/javascript/jscomp/WarningLevel;")]
        public static global::com.google.javascript.jscomp.WarningLevel QUIET {
            get {
                global::net.sf.jni4net.jni.JNIEnv @__env = global::net.sf.jni4net.jni.JNIEnv.ThreadEnv;
            using(new global::net.sf.jni4net.jni.LocalFrame(@__env, 10)){
                return global::net.sf.jni4net.utils.Convertor.StrongJ2Cp<global::com.google.javascript.jscomp.WarningLevel>(@__env, @__env.GetStaticObjectFieldPtr(global::com.google.javascript.jscomp.WarningLevel.staticClass, global::com.google.javascript.jscomp.WarningLevel.j4n_QUIET3));
            }
            }
        }
        
        [global::net.sf.jni4net.attributes.JavaMethodAttribute("Lcom/google/javascript/jscomp/WarningLevel;")]
        public static global::com.google.javascript.jscomp.WarningLevel DEFAULT {
            get {
                global::net.sf.jni4net.jni.JNIEnv @__env = global::net.sf.jni4net.jni.JNIEnv.ThreadEnv;
            using(new global::net.sf.jni4net.jni.LocalFrame(@__env, 10)){
                return global::net.sf.jni4net.utils.Convertor.StrongJ2Cp<global::com.google.javascript.jscomp.WarningLevel>(@__env, @__env.GetStaticObjectFieldPtr(global::com.google.javascript.jscomp.WarningLevel.staticClass, global::com.google.javascript.jscomp.WarningLevel.j4n_DEFAULT4));
            }
            }
        }
        
        [global::net.sf.jni4net.attributes.JavaMethodAttribute("Lcom/google/javascript/jscomp/WarningLevel;")]
        public static global::com.google.javascript.jscomp.WarningLevel VERBOSE {
            get {
                global::net.sf.jni4net.jni.JNIEnv @__env = global::net.sf.jni4net.jni.JNIEnv.ThreadEnv;
            using(new global::net.sf.jni4net.jni.LocalFrame(@__env, 10)){
                return global::net.sf.jni4net.utils.Convertor.StrongJ2Cp<global::com.google.javascript.jscomp.WarningLevel>(@__env, @__env.GetStaticObjectFieldPtr(global::com.google.javascript.jscomp.WarningLevel.staticClass, global::com.google.javascript.jscomp.WarningLevel.j4n_VERBOSE5));
            }
            }
        }
        
        private static void InitJNI(global::net.sf.jni4net.jni.JNIEnv @__env, java.lang.Class @__class) {
            global::com.google.javascript.jscomp.WarningLevel.staticClass = @__class;
            global::com.google.javascript.jscomp.WarningLevel.j4n_values0 = @__env.GetStaticMethodID(global::com.google.javascript.jscomp.WarningLevel.staticClass, "values", "()[Lcom/google/javascript/jscomp/WarningLevel;");
            global::com.google.javascript.jscomp.WarningLevel.j4n_valueOf1 = @__env.GetStaticMethodID(global::com.google.javascript.jscomp.WarningLevel.staticClass, "valueOf", "(Ljava/lang/String;)Lcom/google/javascript/jscomp/WarningLevel;");
            global::com.google.javascript.jscomp.WarningLevel.j4n_setOptionsForWarningLevel2 = @__env.GetMethodID(global::com.google.javascript.jscomp.WarningLevel.staticClass, "setOptionsForWarningLevel", "(Lcom/google/javascript/jscomp/CompilerOptions;)V");
            global::com.google.javascript.jscomp.WarningLevel.j4n_QUIET3 = @__env.GetStaticFieldID(global::com.google.javascript.jscomp.WarningLevel.staticClass, "QUIET", "Lcom/google/javascript/jscomp/WarningLevel;");
            global::com.google.javascript.jscomp.WarningLevel.j4n_DEFAULT4 = @__env.GetStaticFieldID(global::com.google.javascript.jscomp.WarningLevel.staticClass, "DEFAULT", "Lcom/google/javascript/jscomp/WarningLevel;");
            global::com.google.javascript.jscomp.WarningLevel.j4n_VERBOSE5 = @__env.GetStaticFieldID(global::com.google.javascript.jscomp.WarningLevel.staticClass, "VERBOSE", "Lcom/google/javascript/jscomp/WarningLevel;");
        }
        
        [global::net.sf.jni4net.attributes.JavaMethodAttribute("()[Lcom/google/javascript/jscomp/WarningLevel;")]
        public static com.google.javascript.jscomp.WarningLevel[] values() {
            global::net.sf.jni4net.jni.JNIEnv @__env = global::net.sf.jni4net.jni.JNIEnv.ThreadEnv;
            using(new global::net.sf.jni4net.jni.LocalFrame(@__env, 10)){
            return global::net.sf.jni4net.utils.Convertor.ArrayStrongJ2Cp<com.google.javascript.jscomp.WarningLevel[], global::com.google.javascript.jscomp.WarningLevel>(@__env, @__env.CallStaticObjectMethodPtr(global::com.google.javascript.jscomp.WarningLevel.staticClass, global::com.google.javascript.jscomp.WarningLevel.j4n_values0));
            }
        }
        
        [global::net.sf.jni4net.attributes.JavaMethodAttribute("(Ljava/lang/String;)Lcom/google/javascript/jscomp/WarningLevel;")]
        public static global::com.google.javascript.jscomp.WarningLevel valueOf(global::java.lang.String par0) {
            global::net.sf.jni4net.jni.JNIEnv @__env = global::net.sf.jni4net.jni.JNIEnv.ThreadEnv;
            using(new global::net.sf.jni4net.jni.LocalFrame(@__env, 12)){
            return global::net.sf.jni4net.utils.Convertor.StrongJ2Cp<global::com.google.javascript.jscomp.WarningLevel>(@__env, @__env.CallStaticObjectMethodPtr(global::com.google.javascript.jscomp.WarningLevel.staticClass, global::com.google.javascript.jscomp.WarningLevel.j4n_valueOf1, global::net.sf.jni4net.utils.Convertor.ParStrongCp2J(par0)));
            }
        }
        
        [global::net.sf.jni4net.attributes.JavaMethodAttribute("(Lcom/google/javascript/jscomp/CompilerOptions;)V")]
        public virtual void setOptionsForWarningLevel(global::com.google.javascript.jscomp.CompilerOptions par0) {
            global::net.sf.jni4net.jni.JNIEnv @__env = this.Env;
            using(new global::net.sf.jni4net.jni.LocalFrame(@__env, 12)){
            @__env.CallVoidMethod(this, global::com.google.javascript.jscomp.WarningLevel.j4n_setOptionsForWarningLevel2, global::net.sf.jni4net.utils.Convertor.ParStrongCp2J(par0));
            }
        }
        
        new internal sealed class ContructionHelper : global::net.sf.jni4net.utils.IConstructionHelper {
            
            public global::net.sf.jni4net.jni.IJvmProxy CreateProxy(global::net.sf.jni4net.jni.JNIEnv @__env) {
                return new global::com.google.javascript.jscomp.WarningLevel(@__env);
            }
        }
    }
    #endregion
}
