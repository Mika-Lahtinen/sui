(function() {var type_impls = {
"sui_types":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-EllipticCurveMultisetHash\" class=\"impl\"><a href=\"#impl-Clone-for-EllipticCurveMultisetHash\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for EllipticCurveMultisetHash</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; EllipticCurveMultisetHash</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.75.0/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","sui_types::accumulator::Accumulator"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Default-for-EllipticCurveMultisetHash\" class=\"impl\"><a href=\"#impl-Default-for-EllipticCurveMultisetHash\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for EllipticCurveMultisetHash</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.default\" class=\"method trait-impl\"><a href=\"#method.default\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/default/trait.Default.html#tymethod.default\" class=\"fn\">default</a>() -&gt; EllipticCurveMultisetHash</h4></section></summary><div class='docblock'>Returns the “default value” for a type. <a href=\"https://doc.rust-lang.org/1.75.0/core/default/trait.Default.html#tymethod.default\">Read more</a></div></details></div></details>","Default","sui_types::accumulator::Accumulator"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-MultisetHash%3C32%3E-for-EllipticCurveMultisetHash\" class=\"impl\"><a href=\"#impl-MultisetHash%3C32%3E-for-EllipticCurveMultisetHash\" class=\"anchor\">§</a><h3 class=\"code-header\">impl MultisetHash&lt;32&gt; for EllipticCurveMultisetHash</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.insert\" class=\"method trait-impl\"><a href=\"#method.insert\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">insert</a>&lt;Data&gt;(&amp;mut self, item: Data)<span class=\"where fmt-newline\">where\n    Data: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>]&gt;,</span></h4></section></summary><div class='docblock'>Insert an item into this hash function.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.insert_all\" class=\"method trait-impl\"><a href=\"#method.insert_all\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">insert_all</a>&lt;It, Data&gt;(&amp;mut self, items: It)<span class=\"where fmt-newline\">where\n    It: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a>&lt;Item = Data&gt;,\n    Data: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>]&gt;,</span></h4></section></summary><div class='docblock'>Insert multiple items into this hash function.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.union\" class=\"method trait-impl\"><a href=\"#method.union\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">union</a>(&amp;mut self, other: &amp;EllipticCurveMultisetHash)</h4></section></summary><div class='docblock'>Add all the elements of another hash function into this hash function.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.remove\" class=\"method trait-impl\"><a href=\"#method.remove\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">remove</a>&lt;Data&gt;(&amp;mut self, item: Data)<span class=\"where fmt-newline\">where\n    Data: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>]&gt;,</span></h4></section></summary><div class='docblock'>Remove an element from this hash function.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.remove_all\" class=\"method trait-impl\"><a href=\"#method.remove_all\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">remove_all</a>&lt;It, Data&gt;(&amp;mut self, items: It)<span class=\"where fmt-newline\">where\n    It: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a>&lt;Item = Data&gt;,\n    Data: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>]&gt;,</span></h4></section></summary><div class='docblock'>Remove multiple items from this hash function.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.digest\" class=\"method trait-impl\"><a href=\"#method.digest\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">digest</a>(&amp;self) -&gt; Digest&lt;32&gt;</h4></section></summary><div class='docblock'>Generate a digest of the current state of this hash function.</div></details></div></details>","MultisetHash<32>","sui_types::accumulator::Accumulator"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Deserialize%3C'de%3E-for-EllipticCurveMultisetHash\" class=\"impl\"><a href=\"#impl-Deserialize%3C'de%3E-for-EllipticCurveMultisetHash\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'de&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.202/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for EllipticCurveMultisetHash</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.deserialize\" class=\"method trait-impl\"><a href=\"#method.deserialize\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://docs.rs/serde/1.0.202/serde/de/trait.Deserialize.html#tymethod.deserialize\" class=\"fn\">deserialize</a>&lt;__D&gt;(\n    __deserializer: __D\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;EllipticCurveMultisetHash, &lt;__D as <a class=\"trait\" href=\"https://docs.rs/serde/1.0.202/serde/de/trait.Deserializer.html\" title=\"trait serde::de::Deserializer\">Deserializer</a>&lt;'de&gt;&gt;::<a class=\"associatedtype\" href=\"https://docs.rs/serde/1.0.202/serde/de/trait.Deserializer.html#associatedtype.Error\" title=\"type serde::de::Deserializer::Error\">Error</a>&gt;<span class=\"where fmt-newline\">where\n    __D: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.202/serde/de/trait.Deserializer.html\" title=\"trait serde::de::Deserializer\">Deserializer</a>&lt;'de&gt;,</span></h4></section></summary><div class='docblock'>Deserialize this value from the given Serde deserializer. <a href=\"https://docs.rs/serde/1.0.202/serde/de/trait.Deserialize.html#tymethod.deserialize\">Read more</a></div></details></div></details>","Deserialize<'de>","sui_types::accumulator::Accumulator"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialEq-for-EllipticCurveMultisetHash\" class=\"impl\"><a href=\"#impl-PartialEq-for-EllipticCurveMultisetHash\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> for EllipticCurveMultisetHash</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.eq\" class=\"method trait-impl\"><a href=\"#method.eq\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.PartialEq.html#tymethod.eq\" class=\"fn\">eq</a>(&amp;self, other: &amp;EllipticCurveMultisetHash) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>self</code> and <code>other</code> values to be equal, and is used\nby <code>==</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ne\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.75.0/src/core/cmp.rs.html#239\">source</a></span><a href=\"#method.ne\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.PartialEq.html#method.ne\" class=\"fn\">ne</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>!=</code>. The default implementation is almost always\nsufficient, and should not be overridden without very good reason.</div></details></div></details>","PartialEq","sui_types::accumulator::Accumulator"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Serialize-for-EllipticCurveMultisetHash\" class=\"impl\"><a href=\"#impl-Serialize-for-EllipticCurveMultisetHash\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.202/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for EllipticCurveMultisetHash</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.serialize\" class=\"method trait-impl\"><a href=\"#method.serialize\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://docs.rs/serde/1.0.202/serde/ser/trait.Serialize.html#tymethod.serialize\" class=\"fn\">serialize</a>&lt;__S&gt;(\n    &amp;self,\n    __serializer: __S\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;&lt;__S as <a class=\"trait\" href=\"https://docs.rs/serde/1.0.202/serde/ser/trait.Serializer.html\" title=\"trait serde::ser::Serializer\">Serializer</a>&gt;::<a class=\"associatedtype\" href=\"https://docs.rs/serde/1.0.202/serde/ser/trait.Serializer.html#associatedtype.Ok\" title=\"type serde::ser::Serializer::Ok\">Ok</a>, &lt;__S as <a class=\"trait\" href=\"https://docs.rs/serde/1.0.202/serde/ser/trait.Serializer.html\" title=\"trait serde::ser::Serializer\">Serializer</a>&gt;::<a class=\"associatedtype\" href=\"https://docs.rs/serde/1.0.202/serde/ser/trait.Serializer.html#associatedtype.Error\" title=\"type serde::ser::Serializer::Error\">Error</a>&gt;<span class=\"where fmt-newline\">where\n    __S: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.202/serde/ser/trait.Serializer.html\" title=\"trait serde::ser::Serializer\">Serializer</a>,</span></h4></section></summary><div class='docblock'>Serialize this value into the given Serde serializer. <a href=\"https://docs.rs/serde/1.0.202/serde/ser/trait.Serialize.html#tymethod.serialize\">Read more</a></div></details></div></details>","Serialize","sui_types::accumulator::Accumulator"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-EllipticCurveMultisetHash\" class=\"impl\"><a href=\"#impl-Debug-for-EllipticCurveMultisetHash\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for EllipticCurveMultisetHash</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","sui_types::accumulator::Accumulator"],["<section id=\"impl-Eq-for-EllipticCurveMultisetHash\" class=\"impl\"><a href=\"#impl-Eq-for-EllipticCurveMultisetHash\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for EllipticCurveMultisetHash</h3></section>","Eq","sui_types::accumulator::Accumulator"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()