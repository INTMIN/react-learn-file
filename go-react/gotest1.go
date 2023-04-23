package main

import (
	"fmt"
	"io/ioutil"
	"math/rand"
	"net/http"
	"os"
	"time"
)

func main() {
	fetchUrl()

	fmt.Printf("%#v\n", main)
	change()
	inits()
}

//var a int

func change() {
	var a = "1%d"

	fmt.Printf(a)
	// fmt.Printf(string(a))
	//var b []int
	numbers := make([]int, 5, 10)
	numbers = append(numbers, 1, 2, 3, 4)
	numbers2 := make([]int, 15)
	copy(numbers2, numbers)
	fmt.Println(numbers)

	m := make(map[string]string)
	m["name"] = "min"
	m["last_name"] = "hen_shang"
	fmt.Print(m["name"])
	fmt.Print(m["last_name"])

	times() // 随机数需要初始化
}

func times() {
	rand.Seed(time.Now().Unix())
	num := rand.Intn(10)
	if num < 0 {
		fmt.Println(num, "这个数比0小")
	} else if num > 5 {
		fmt.Println(num, "这个数比5大")
	} else {
		fmt.Println(num, "这数字在0和5之间")
	}
}

func inits() {
	var p *int
	a := 2333
	p = &a
	fmt.Println(p)  // 指针地址
	fmt.Println(*p) // 指针指向地址的值
}

func fetchUrl() {
	targetUrl := "https://github.com/notifications/indicator"
	req, _ := http.NewRequest("GET", targetUrl, nil)
	req.Header.Add("Content-Type", "application/json")
	response, err := http.DefaultClient.Do(req)

	bytes, err := ioutil.ReadAll(response.Body)
	if err != nil {
		fmt.Println(err, "http.post")
		os.Exit(1)
	}

	defer response.Body.Close()
	fmt.Println(string(bytes))

}

func HandleError(err error, when string) {
	if err != nil {
		fmt.Println(err, when)
		os.Exit(1)
	}
}
