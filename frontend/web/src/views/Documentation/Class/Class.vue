<template>
  <section id="class" class="page-body mt-10 mb-5">
    <h2 class="v-heading text-h4 text-sm-h4 mb-3">
      <a href="#class"
        class="text-decoration-none text-right text-md-left">#</a>
      <template v-if="isArabic">
        الصنف
      </template>
      <template v-else>
        Class
      </template>
    </h2>

    <p v-if="isArabic">
      <span class="abjad">أبجد</span> هي لغةٌ غرضية التوجيه، أي بإمكانك انشاء
      أنواع بيانات خاصة! <br />
      الصنفات تجسد هيه الأنواع، بحيث يُعرف المُبرمج نوعًا (صنفًا) ذات خصائص معينة، بحيث يكون لكل قيمة
      من هذا النوع هذه الخصائص. كما يمكن تعريف دالات خاصة بكل نوع.
    </p>
    <p v-else>
      <span class="abjad">ABJAD</span> is an object-oriented languages, that means
      you can define your own types! <br />
      Classes simply represents a custom type, where you defined some properties
      that a variable with this type has, as well as what are the methods 
      that this type can access.
    </p>

    <section id="syntax" class="page-body mt-10 mb-5">
      <h2 class="v-heading text-h5 text-sm-h5 mb-3">
        <a href="#syntax"
          class="text-decoration-none text-right text-md-left">#</a>
        <template v-if="isArabic">
          الصياغة
        </template>
        <template v-else>
          Syntax
        </template>
      </h2>

      <section id="defining-class" class="page-body mt-5 mb-5">
        <h2 class="v-heading text-h6 text-sm-h6 mb-3">
          <a href="#defining-class"
            class="text-decoration-none text-right text-md-left">#</a>
          <template v-if="isArabic">
            تعريف صنف
          </template>
          <template v-else>
            Defining a Class
          </template>
        </h2>

        <p v-if="isArabic">
          صياغة تعريف صنف تكون كالتالي:
          <ul>
            <li>الكلمة المفتاح <code>صنف</code></li>
            <li>اسم الصنف</li>
            <li>فتح حاوية <code>{</code></li>
            <li>دالة بانية، وهي دالة لها نفس اسم الصنف</li>
            <li>كود</li>
            <li>إغلاق الحاوية <code>{</code></li>
          </ul>
        </p>
        <p v-else>
          The syntax for defining a class in <span class="abjad">ABJAD</span> is as the following:
          <ul>
            <li>The keyword <code>صنف</code></li>
            <li>The name of the class</li>
            <li>An opening brace <code>{</code></li>
            <li>A constructor for the class, which is a function having the name of the class</li>
            <li>Some code</li>
            <li>A closing brace <code>{</code></li>
          </ul>
        </p>

        <section id="defining-class-example" class="page-body mt-5 mb-5">
          <h2 class="v-heading text-body-1 text-sm-body-1 font-weight-bold mb-1">
            <a href="#defining-class-example"
              class="text-decoration-none text-right text-md-left">#</a>
            <template v-if="isArabic">
              مثال
            </template>
            <template v-else>
              Example
            </template>
          </h2>

          <p v-if="isArabic">
            المثال التالي يُعرّف الصنف <code>إنسان</code> ذات ثلاث خصائص:
            <code>إسم_أول</code>، <code>إسم_أخير</code> و<code>عمر</code>.
            لهذا الصنف دالة بانية تأخذ ثلاثة معطيات، بالإضافة إلى دالة أخرى
            تحمل الاسم <code>تعديل_العمر</code> وتأخذ مُعطًى واحدًا.  <br />
            <b>الدالة البانية</b> يتم نداؤها وقت انشاء قيمة جديدة من النوع
            المُعرف، في هذه الحالة هو <code>إنسان</code>. أما المُعطيات الثلاثة
            فيتم استخدامها لتعيين قيمة أولية للخصائص الثلاثة وقت الإنشاء أيضا.  <br />
            <b>الدالة الأخرى</b> <code>تعديل_العمر</code> تُستخدم لتعيين قيمة جديدة
            للخاصية <code>عمر</code>.
          </p>
          <p v-else>
            The following example defines a class named <code>إنسان</code>, that has
            three fields: <code>إسم_أول</code>, <code>إسم_أخير</code> and <code>عمر</code>.
            It also has the constructor with three parameters, and a function named <code>تعديل_العمر</code>
            that takes one parameter. <br />
            The <b>constructor</b> is the function to be called when we want to create
            a value from our defined type, in this case <code>إنسان</code>. When called, 
            it sets the value of the fields to the ones passed to it as parameters. <br />
            The <b>other function</b> <code>تعديل_العمر</code> is absically a setter for our field
            <code>عمر</code>, it takes a value, and sets the field's value to it.
          </p>
          <code-area :codes="codes.ex1" />

        </section>
      </section>

      <section id="instantiating-class" class="page-body mt-5 mb-5">
        <h2 class="v-heading text-h6 text-sm-h6 mb-3">
          <a href="#instantiating-class"
            class="text-decoration-none text-right text-md-left">#</a>
          <template v-if="isArabic">
            إنشاء قيمة من صنف
          </template>
          <template v-else>
            Instantiating a Class
          </template>
        </h2>

        <p v-if="isArabic">
          صياغة  إنشاء قيمة من نوع صنف تكون كالتالي:
          <ul>
            <li>الكلمة المفتاح <code>انشئ</code></li>
            <li>اسم الصنف</li>
            <li>فتح قوس <code>(</code></li>
            <li>المُعطيات التي تأخذها الدالة البانية، منفصلة بفاصلة</li>
            <li>إغلاق القوس <code>)</code></li>
            <li>فاصلة منقوطة <code>؛</code></li>
          </ul>
        </p>
        <p v-else>
          The syntax for instantiating a class in <span class="abjad">ABJAD</span> is as the following:
          <ul>
            <li>The keyword <code>انشئ</code></li>
            <li>The name of the class</li>
            <li>An opening parenthesis <code>(</code></li>
            <li>The parameters that the constructor takes, seperated by commas</li>
            <li>Some code</li>
            <li>A closing parenthesis <code>)</code></li>
            <li>A semicolon <code>؛</code></li>
          </ul>
        </p>

        <section id="defining-class-example" class="page-body mt-5 mb-5">
          <h2 class="v-heading text-body-1 text-sm-body-1 font-weight-bold mb-1">
            <a href="#defining-class-example"
              class="text-decoration-none text-right text-md-left">#</a>
            <template v-if="isArabic">
              مثال
            </template>
            <template v-else>
              Example
            </template>
          </h2>

          <p v-if="isArabic">
            المثال التالي يُنشئ قيمة من نوع <code>إنسان</code>، ذات الخصائص التالي:
            <ul>
              <li><code>إسم_أول</code> يساوي "محمد"</li>
              <li><code>إسم_أخير</code> يساوي "عزالدين"</li>
              <li><code>عمر</code> يساي 20</li>
            </ul>
            وتقوم بتعيين القيمة للمتغير <code>محمد</code>.
          </p>
          <p v-else>
            The following example creates an instance of type <code>إنسان</code>, 
            with the following fields:
             <ul>
              <li><code>إسم_أول</code> equals to "محمد"</li>
              <li><code>إسم_أخير</code> equals to "عزالدين"</li>
              <li><code>عمر</code> equals to 20</li>
            </ul>
            and assigns the result to the variable <code>محمد</code>.
          </p>
          <code-area :codes="codes.ex2" />

        </section>
      </section>

      <section id="accessing-fields-and-functions" class="page-body mt-5 mb-5">
        <h2 class="v-heading text-h6 text-sm-h6 mb-3">
          <a href="#accessing-fields-and-functions"
            class="text-decoration-none text-right text-md-left">#</a>
          <template v-if="isArabic">
            الوصول إلى خصائص ودالات الصنف
          </template>
          <template v-else>
            Accessing a Class's fields and functions
          </template>
        </h2>

        <p v-if="isArabic">
          للوصول إلى دالات متغير من نوع صنف معين، كل ما عليك فعله
          هو كتابة اسم المتغير، متبوعًا بنقطة، ومن ثم اسم الدالة المرغوبة،
          مُعطيًا إياها القيم التي تحتاجها.
        </p>
        <p v-else>
          To access the functions of a class's object, you type the name of the object, followed by 
          a dot, then the name of the function you want to access, giving it the needed parameters.
        </p>

        <h2 class="v-heading text-body-1 text-sm-body-1 font-weight-bold mb-1">
          <template v-if="isArabic">
            مثال
          </template>
          <template v-else>
            Example
          </template>
        </h2>

        <code-area :codes="codes.ex3" />

        <section id="getters-setters" class="page-body mt-5 mb-5">
          <h2 class="v-heading text-h6 text-sm-h6 mb-3">
            <a href="#getters-setters"
              class="text-decoration-none text-right text-md-left">#</a>
            <template v-if="isArabic">
              الحواصل والمُعدّلات
            </template>
            <template v-else>
              Getters and Setters
            </template>
          </h2>

          <p v-if="isArabic">
            للحصول على قيمة الخصائص في صنف معين، يُحبذ استعمال دالات داخلية لذلك، 
            بدلًا من الوصول إلى الخاصية مباشرة. <br />
            هناك دالّتان مُتعارفٌ استعمالهُما في هذا السياق:
            <ul>
              <li><b>الحواصل:</b> وهي دالّات تُرجع قيمة الخاصية.</li>
              <li><b>المُعدّلات:</b> وهي دالّات تُعدّل قيم الخاصية.</li>
            </ul>
          </p>
          <p v-else>
            To get the value of a field, it is recommended to use a member function rather
            than accessing it directly. <br />
            There are two convensional functions in this manner:
            <ul>
              <li><b>Getters:</b> are functions that simply return the value of the field.</li>
              <li><b>Setters:</b> are functions that modify the value of the field.</li>
            </ul>
          </p>

          <h2 class="v-heading text-body-1 text-sm-body-1 font-weight-bold mb-1">
            <template v-if="isArabic">
              مثال
            </template>
            <template v-else>
              Example
            </template>
          </h2>

          <code-area :codes="codes.ex4" />

          <v-alert
            class="mt-4"
            text type="info"
          >
            <template v-if="isArabic">
              الوصول إلى قيمة الخصائص مباشرة، دون استعمال الحواصل والمُعدّلات، قد يكون عُرضة
              لأخطاء منطقية، خاصة في حالة التغير المستعمر لقيمة الخصائص.
            </template>
            <template v-else>
              Accessing a field directly can be error prone, especially when its value
              gets modified with time.
            </template>
          </v-alert>
        </section>
      </section>

    </section>

    <content-thumbnail :links="links" />
    <footer-links :links="linksFooter" />
  </section>
</template>

<script src="./Class.js"></script>
<style lang="scss" scoped src="../Documentation.scss"></style>